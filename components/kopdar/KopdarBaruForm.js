import { useRef } from "react";
import KopdarCard from "../ui/KopdarCard";
import styles from "./KopdarBaruForm.module.css";

const KopdarBaruForm = ({ addKopdar }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataKopdarBaru = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    addKopdar(dataKopdarBaru);
  };
  return (
    <KopdarCard>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Judul Kopdar</label>
          <input type="text" required ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Gambar Kopdar</label>
          <input type="url" required ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Alamat Kopdar</label>
          <input type="text" required ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Deskripsi Kopdar</label>
          <textarea required ref={descriptionInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Tambah Kopdar</button>
        </div>
      </form>
    </KopdarCard>
  );
};

export default KopdarBaruForm;
