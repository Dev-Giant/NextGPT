import React from "react";
import Post from "@/components/Post/Post";
import styles from "./PostList.module.scss";

const posts = ["post1", "post2", "post3", "post4", "post5", "post6"];

const PostList: React.FC = () => {
  return (
    <>
      <h3>Blog Post List General</h3>
      <p className={styles.postListDescription}>
        Click the "Generate" button below to generate a proposal for a social
        media post about that blog post
      </p>
      <div className={styles.postViewOptions}>
        <div>Advanced(switch)</div>
        <div>
          <span>View: Table</span>
          <span className={styles.opacityMask}>/List</span>
        </div>
      </div>
      <div className={styles.postGrid}>
        {posts.map((item) => (
          <Post key={item} />
        ))}
      </div>
    </>
  );
};

export default PostList;
