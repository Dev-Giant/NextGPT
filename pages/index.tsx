import Head from "next/head";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./index.module.scss";
import PostList from "@/modules/PostList/PostList";
import TextSummary from "@/modules/General/TextSummary/TextSummary";
import FreePrompt from "@/modules/General/FreePrompt/FreePrompt";

export default function Home() {
  return (
    <>
      <Head>
        <title>ITM Internal GPT-3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Tabs id="general-tabs" defaultActiveKey="textSummary" className={styles.generalTabs}>
          <Tab eventKey="textSummary" title="Text summarization">
            <TextSummary />
          </Tab>
          <Tab eventKey="freePrompt" title="Free From Prompt">
            <FreePrompt />
          </Tab>
          <Tab eventKey="linkedinPosts" title="Linked-In Post">
            <PostList />
          </Tab>
        </Tabs>
      </main>
    </>
  );
}
