import KopdarItem from "./KopdarItem";
import styles from "./KopdarList.module.css";

const KopdarList = ({ kopdars }) => {
  return (
    <ul className={styles.list}>
      {kopdars?.map((kop) => (
        <KopdarItem
          key={kop.id}
          id={kop.id}
          image={kop.image}
          title={kop.title}
          address={kop.address}
        />
      ))}
    </ul>
  );
};

export default KopdarList;
