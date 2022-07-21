import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Kopdar</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Kopdars</Link>
          </li>
          <li>
            <Link href="/kopdar-baru">Tambah Kopdar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
