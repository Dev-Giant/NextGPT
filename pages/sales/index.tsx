import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./Sales.module.scss";
import SalesIntro from "../../modules/Sales/Intro/SalesIntro";
import PostList from "../../modules/PostList/PostList";

const Sales = () => {
  return (
    <Tabs id="sales-tabs" defaultActiveKey="automaticPosts" className={styles.salesTabs}>
      <Tab eventKey="automaticPosts" title="Automatic LI Posts">
        <PostList />
      </Tab>
      <Tab eventKey="ownPost" title="Your Own Post">
        Your Own Post        
      </Tab>
      <Tab eventKey="linkedinPosts" title="Intro">
        <SalesIntro />
      </Tab>
      <Tab eventKey="geography" title="Geography">
        Geography        
      </Tab>
      <Tab eventKey="specialization" title="Specialization">
        Specialization      
      </Tab>
      <Tab eventKey="fit" title="Fit">
        Fit 
      </Tab>
      <Tab eventKey="message" title="Message">
        Message        
      </Tab>
    </Tabs>
  );
};

export default Sales;
