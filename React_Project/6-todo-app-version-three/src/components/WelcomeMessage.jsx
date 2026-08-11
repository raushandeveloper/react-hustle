import styles from "./WelcomeMessage.module.css";

function WelcomeMessage() {
  return (
    <h1 className={styles.welcome}>
      Welcome to Todo App
    </h1>
  );
}

export default WelcomeMessage;