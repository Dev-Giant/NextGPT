import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Post.module.scss";
import type { Item } from "../../types/RSSTypes";

type PostProps = {
  data: Item;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<Item>>;
};

/**
 * Represent Post Component
 * @param props 
 * @argument data(Item) - Post component data(author, title, description and so on)
 * @argument setShow(function) - a function to determine whether display or not display generation modal
 * @argument setData(function) - a function to set data for prompt of post generation
 * @returns Post component with dynamic data and modal config functions
 */

const Post = (props: PostProps) => {
  const handleShow = () => {
    props.setShow(true);
    props.setData(props.data);
  };
  return (
    <Card className={styles.postItem}>
      <Card.Img
        className={styles.postImage}
        variant="top"
        src={props.data.imageUrl}
      />
      <Card.Body className="p-0">
        <Row className={styles.postPublishInfo}>
          <Col>{props.data.publishedAt}</Col>
          <Col className="text-end">Post Author</Col>
        </Row>
        <Card.Title className={styles.postTitle}>{props.data.title}</Card.Title>
        <p className={styles.postDescription}>{props.data.description}</p>
        <div className={styles.postTags}>
          <span>Internal_Tag1</span>
          <span>Internal_Tag2</span>
        </div>
        <Row>
          <Col>
            <Button className={styles.postEdit}>Edit</Button>
          </Col>
          <Col sm={8}>
            <Button className={styles.postGenerate} onClick={handleShow}>
              Primary
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;
