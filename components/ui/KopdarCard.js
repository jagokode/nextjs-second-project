import styles from "./KopdarCard.module.css";

const KopdarCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default KopdarCard;
