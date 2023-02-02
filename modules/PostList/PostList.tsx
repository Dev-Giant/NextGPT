import React, { useState, useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../src/redux/hook";
import { getPosts } from "../../src/redux/slices/sales";
import { IRootState } from "../../src/redux/store";
import { Item } from "../../types/RSSTypes";
import Post from "@/components/Post/Post";
import styles from "./PostList.module.scss";
import Pagination from "@/components/Pagination/Pagination";

const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, total }: { posts: Item[]; total: number } = useAppSelector(
    (state: IRootState) => state.sales
  );

  const [page, setPage] = useState(0);
  const [isFetch, setIsFetch] = useState(true);

  const getPostDatas = useCallback(() => {
    if(isFetch) {
    dispatch(getPosts(page));
    setIsFetch(false);
    }
  }, [dispatch, isFetch, page]);

  useEffect(() => {
    getPostDatas();
  }, [dispatch, isFetch]);
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
          <span className={styles.textColor}>/List</span>
        </div>
      </div>
      <div className={styles.postGrid}>
        {posts.map((item) => (
          <Post key={item.title} data={item} />
        ))}
      </div>
      <div className={styles.paginationDiv}>
        <Pagination total={Math.floor(total / 6)} page={page} setPage={setPage} setIsFetch={setIsFetch}/>
      </div>
    </>
  );
};

export default PostList;
