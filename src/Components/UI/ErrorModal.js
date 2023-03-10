import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose}/>
};

const Modal = props => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onClose={props.onClose} />,
        document.getElementById("modal"))}
    </Fragment>
  );
}

export default ErrorModal;