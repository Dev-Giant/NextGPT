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
  return (
    <Tabs id="sales-tabs" defaultActiveKey="automaticPosts" className={styles.salesTabs}>
      <Tab eventKey="automaticPosts" title="Automatic LI Posts">
        <PostList />
      </Tab>
      <Tab eventKey="ownPost" title="Your Own Post">
        <OwnPost />      
      </Tab>
      <Tab eventKey="linkedinPosts" title="Intro">
        <SalesIntro />
      </Tab>
      <Tab eventKey="geography" title="Geography">
        <Geography />      
      </Tab>
      <Tab eventKey="specialization" title="Specialization">
        <Specialization />     
      </Tab>
      <Tab eventKey="fit" title="Fit">
        <Fit />
      </Tab>
      <Tab eventKey="message" title="Message">
        <Message />        
      </Tab>
    </Tabs>
  );
};

export default Sales;
