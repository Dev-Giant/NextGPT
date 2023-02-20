import { AzureFunction, Context } from "@azure/functions"
import Parser from 'rss-parser';
import differenceWith from 'lodash/differenceWith';
import { connect } from './db/client';

type FeedItem = {
  'image': string;
  'media:content': string;
  'thumbnail': string;
  'media:thumbnail': string;
  title: string;
  link: string;
  content: string;
  pubDate: string;
};

const PARSING_SOURCE = process.env.PARSING_SOURCE;

const timerTrigger: AzureFunction = async function (context: Context): Promise<void> {
    const dbConnection = await connect();
    const parser: Parser<any, FeedItem> = new Parser({
        customFields: {
          item: [
            ['media:content', 'image'],
            ['media:thumbnail', 'thumbnail']
          ]
        }
    });
    
    const feed: { items: FeedItem } = await parser.parseURL(PARSING_SOURCE);

    const selectAllQuery = {
      text: 'SELECT * FROM "Article"',
    }
    const { rows: articles } = await dbConnection.query(selectAllQuery);

    const newArticles = differenceWith(
      feed.items,
      articles,
      (item, article) => item.link === article.link
    ).map(item => ({
      title: item.title,
      link: item.link,
      description: item.content,
      imageUrl: item.image['$'].url,
      thumbnailUrl: item.thumbnail['$'].url,
      publishedAt: new Date(item.pubDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    let countOfCreatedArticles = 0;
    for (const article of newArticles) {
      try {
        const articleColumns = Object.keys(article).map(key => `"${key}"`).join(', ');
        const articleValuesPlaceholder = Array.from(Object.values(article), (_, i) => `$${i+1}`).join(', ');
        const articleValues = Object.values(article);
        const insertQuery = {
          text: `INSERT INTO "Article"(${articleColumns})
            VALUES(${articleValuesPlaceholder})`,
          values: articleValues,
        };
        await dbConnection.query(insertQuery);
        countOfCreatedArticles++;
      } catch (error) {
        context.log('New article creation error[message]:', error.message);
      }
    }

    context.log('New Articles created[count]:', countOfCreatedArticles);
  };

export default timerTrigger;
