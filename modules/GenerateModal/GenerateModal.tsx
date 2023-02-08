import useSWR from "swr";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import styles from "./GenerateModal.module.scss";
import type { Item } from "../../types/RSSTypes";

interface generateModalProps {
  data: Item;
  show: boolean;
  handleClose: () => void;
}

const GenerateModal = (props: generateModalProps) => {
  const fetcher = () =>
    fetch("/api/gpt3/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: props.data.description,
      }),
    }).then((res) => res.json());
  const { isLoading, data } = useSWR("/api/gpt3/completion", fetcher);
  const copy = (text: string) => () => {
    navigator.clipboard.writeText(text)
  }
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
          <div>{data?.data.text.text}</div>
          <div className={styles.modalButtonGroup}>
            <Button className={styles.modalCopy} onClick={copy(data?.data.text.text)}>Copy to Clipboard</Button>
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
