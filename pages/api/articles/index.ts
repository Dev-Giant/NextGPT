import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../prisma/PrismaClient';

export interface Article {
    id: number
    title: string
    link: string
    description: string
    imageUrl: string
    thumbnailUrl: string
    publishedAt: string
    createdAt: string
    updatedAt: string
}

export type FindAllArticlesEndpointResponse = {
    data?: {
        articles: Article[],
        count: number,
        limit: string | string[] | undefined,
        page: string | string[] | undefined
    },
    error?: { message: string }
}

/**
 * Represents api to get articles
 * @param req 
 * @argument limit - request number of data for a page
 * @argument page - number of page
 * @argument order - asc/desc
 * @argument search - search index 
 * @param res 
 * @argument articles - data of articles we need to get from end point
 * @argument count - total number of articles
 * @argument limit - number of data for a page
 * @argument page - number of page
 */

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<FindAllArticlesEndpointResponse>
) {
    if (req.method === "GET") {
        const { limit, page, order, search } = req.query;

        try {
            const options = {
                ...(page && limit && { skip: (Number(page) - 1) * Number(limit) }),
                ...(limit && { take: Number(limit) }),
                ...(search
                    && {
                        where: {
                            title: {
                                contains: String(search),
                            },
                        }
                }),
            };

            const articles = await prisma.article.findMany({
                ...options,
                orderBy: (order && order instanceof Array && { [order[0]]: order[1] })
                    || { publishedAt: 'desc' },
            }) as unknown as Article[];

            const articlesCount = await prisma.article.count();

            res.status(200).json({
                data: {
                    articles,
                    count: articlesCount,
                    limit,
                    page,
                },
            })
        } catch (err: any) {
            res.status(500).json({
                error: {
                    message: `Something went wrong on our end\n${err.message}`
                }
            })
        }

    } else {
        res.status(401).json({
            error: { message: "Wrong request type" }
        })
    }

}