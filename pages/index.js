// kopdar.com/

import Head from "next/head";
import { MongoClient } from "mongodb";
import KopdarList from "../components/kopdar/KopdarList";

// const FAKE_KOPDAR = [
//   {
//     id: "k1",
//     title: "Kopdar Pertama",
//     image:
//       "https://images.unsplash.com/photo-1657181706325-127e210b5e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80",
//     address: "Jalan Palace 5, Kota Abcd",
//     description: "Kopdar pertama kali di Abcd",
//   },
//   {
//     id: "k2",
//     title: "Kopdar Kedua",
//     image:
//       "https://images.unsplash.com/photo-1657485451199-78429429ecb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     address: "Jalan Koskeroglu 7, Kota Kosker",
//     description: "Kopdar kedua kali di Koskar",
//   },
// ];

// updated/regenerated data every request
// this function run always only on the server after deployment
// use this if the data changes every seconds or you need to access to req and res object
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API

//   // return object with props property
//   return {
//     props: {
//       kopdars: FAKE_KOPDAR,
//     },
//   };
// };

// loaded data required before rendering component
// this function run always on the server at build before deployment
export const getStaticProps = async () => {
  // fetch data from an API
  const client = await MongoClient.connect("mongodb://localhost:27017/kopdar");
  const db = client.db();
  const kopdarCollection = db.collection("kopdar");
  const kopdars = await kopdarCollection.find().toArray();
  client.close();

  // always return an object
  return {
    props: {
      kopdars: kopdars?.map((kopdar) => ({
        id: kopdar._id.toString(),
        title: kopdar.title,
        image: kopdar.image,
        address: kopdar.address,
      })),
    },
    // updated regularly after deployment
    revalidate: 1,
  };
};

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Kopdar</title>
        <meta
          name="description"
          content="Ketemuan dan nongkrong bareng teman sehobi di kota anda"
        />
      </Head>
      <KopdarList kopdars={props.kopdars} />
    </>
  );
};

export default Home;
