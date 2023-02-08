import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useAppSelector, useAppDispatch } from "../../src/redux/hook";
import { IRootState } from "../../src/redux/store";
import styles from "./GenerateModal.module.scss";
import type { Item } from "../../types/RSSTypes";
import { getOpenAIResult } from "../../src/redux/slices/openai";

interface generateModalProps {
  data: Item;
  show: boolean;
  handleClose: () => void;
}

const GenerateModal = (props: generateModalProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, openAIPost }: { isLoading: boolean; openAIPost: string } =
    useAppSelector((state: IRootState) => state.openai);

  useEffect(() => {
    if (props.data.description !== "") {
      dispatch(getOpenAIResult(props.data.description));
    }
  }, [dispatch, props.data.description]);
  const copy = (text: string) => () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Modal show={props.show} centered>
      {isLoading ? (
        <Modal.Body className={styles.modalLoading}>
          <Spinner animation="border" variant="warning" />
          <p>Generating post in progress...</p>
        </Modal.Body>
      ) : (
        <Modal.Body className={styles.modalResult}>
          <p>Generated social media post for:</p>
          <h6>{props.data.title}</h6>
          <div>{openAIPost}</div>
          <div className={styles.modalButtonGroup}>
            <Button className={styles.modalCopy} onClick={copy(openAIPost)}>
              Copy to Clipboard
            </Button>
            <Button className={styles.modalClose} onClick={props.handleClose}>
              Close
            </Button>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
};

export default GenerateModal;
