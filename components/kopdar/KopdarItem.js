import { useRouter } from "next/router";
import KopdarCard from "../ui/KopdarCard";
import styles from "./KopdarItem.module.css";

const KopdarItem = ({ id, title, image, address }) => {
  const router = useRouter();

  const handleShowDetails = () => router.push("/" + id);

  return (
    <li className={styles.item}>
      <KopdarCard>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={handleShowDetails}>Lihat Selengkapnya</button>
        </div>
      </KopdarCard>
    </li>
  );
};

export default KopdarItem;
