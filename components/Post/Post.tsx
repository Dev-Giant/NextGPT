import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from './Post.module.scss';

const Post = () => {
  return (
    <Card className={styles.postItem}>
      <Card.Img className={styles.postImage} variant="top" src="holder.js/100px180" />
      <Card.Body className="p-0">
        <Row className={styles.postPublishInfo}>
          <Col>
            Published On
          </Col>
          <Col className="text-end">
            Post Author
          </Col>
        </Row>
        <Card.Title>
          Card Title
        </Card.Title>
        <p className={styles.postDescription}>
          Card Preview Text
        </p>
        <div className={styles.postTags}>
          <span>Internal_Tag1</span>
          <span>Internal_Tag2</span>
        </div>
        <Row>
          <Col>
            <Button className={styles.postEdit}>Edit</Button>
          </Col>
          <Col sm={8}>
            <Button className={styles.postGenerate}>Primary</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;