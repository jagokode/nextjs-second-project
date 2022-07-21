import { Image } from "next/image";
import styles from "./KopdarDetail.module.css";

const KopdarDetail = ({ title, address, image, description }) => {
  return (
    <section className={styles.detail}>
      <Image src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default KopdarDetail;
