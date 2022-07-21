import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import KopdarDetail from "../components/kopdar/KopdarDetail";

// Note: useRouter hook can only be used in component function, not in getStaticProps
// Note2: getStaticPaths is a function need to export in a page component file if it's a dynamic page that using getStaticProps.

// the job of returning an object where we describe all the dynamic segment values including the ID for which this page should be generated.
export const getStaticPaths = async () => {
  // fetch id for single kopdar url
  const client = await MongoClient.connect("mongodb://localhost:27017/kopdar");
  const db = client.db();
  const kopdarCollection = db.collection("kopdar");
  const kopdars = await kopdarCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: kopdars?.map((kopdar) => ({
      params: {
        kopdarId: kopdar._id.toString(),
      },
    })),
    fallback: false,
  };
};

// with this, a page is pre-generated during build process.
export const getStaticProps = async (context) => {
  // get data for single kopdar
  const kopdarId = ObjectId(context.params.kopdarId);
  const client = await MongoClient.connect("mongodb://localhost:27017/kopdar");
  const db = client.db();
  const kopdarCollection = db.collection("kopdar");
  const chosenKopdar = await kopdarCollection.findOne({ _id: kopdarId });
  client.close();

  return {
    props: {
      kopdarInfo: {
        id: chosenKopdar._id.toString(),
        title: chosenKopdar.title,
        address: chosenKopdar.address,
        image: chosenKopdar.image,
        description: chosenKopdar.description,
      },
    },
  };
};

const SingleKopdar = (props) => {
  return (
    <>
      <Head>
        <title>{props.kopdarInfo.title}</title>
        <meta name="description" content={props.kopdarInfo.description} />
      </Head>
      <KopdarDetail
        title={props.kopdarInfo.title}
        address={props.kopdarInfo.address}
        image={props.kopdarInfo.image}
        description={props.kopdarInfo.description}
      />
    </>
  );
};

export default SingleKopdar;
