// kopdar.com/kopdar
import Head from "next/head";
import KopdarBaruForm from "../../components/kopdar/KopdarBaruForm";
import { useRouter } from "next/router";

const KopdarBaru = () => {
  const router = useRouter();

  const addKopdar = async (data) => {
    const response = await fetch("/api/kopdar-baru", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    console.log(result);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Tambah Kopdar</title>
        <meta
          name="description"
          content="tambah rencana kopdar yang akan datang"
        />
      </Head>
      <KopdarBaruForm addKopdar={addKopdar} />;
    </>
  );
};

export default KopdarBaru;
