import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./Sales.module.scss";
import SalesIntro from "@/modules/Sales/Intro/SalesIntro";
import PostList from "@/modules/PostList/PostList";
import OwnPost from "@/modules/Sales/OwnPost/OwnPost";
import Geography from "@/modules/Sales/Geography/Geography";
import Specialization from "@/modules/Sales/Specialization/Specialization";
import Fit from "@/modules/Sales/Fit/Fit";
import Message from "@/modules/Sales/Message/Message";

const Sales = () => {
  const [showResult, setShowResult] = useState(false);
  return (
    <Tabs
      id="sales-tabs"
      defaultActiveKey="automaticPosts"
      className={styles.salesTabs}
      onSelect={() => setShowResult(false)}
    >
      <Tab eventKey="automaticPosts" title="Automatic LI Posts">
        <PostList />
      </Tab>
      <Tab eventKey="ownPost" title="Your Own Post">
        <OwnPost showResult={showResult} setShowResult={setShowResult} />
      </Tab>
      <Tab eventKey="linkedinPosts" title="Intro">
        <SalesIntro showResult={showResult} setShowResult={setShowResult} />
      </Tab>
      <Tab eventKey="geography" title="Geography">
        <Geography showResult={showResult} setShowResult={setShowResult} />
      </Tab>
      <Tab eventKey="specialization" title="Specialization">
        <Specialization showResult={showResult} setShowResult={setShowResult} />
      </Tab>
      <Tab eventKey="fit" title="Fit">
        <Fit showResult={showResult} setShowResult={setShowResult} />
      </Tab>
      <Tab eventKey="message" title="Message">
        <Message showResult={showResult} setShowResult={setShowResult} />
      </Tab>
    </Tabs>
  );
};

export default Sales;
