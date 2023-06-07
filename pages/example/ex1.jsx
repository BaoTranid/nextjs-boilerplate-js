import Head from 'next/head';

import { useSelector } from 'react-redux';

const Ex1 = ({ post }) => {
  const exampleData = useSelector(state => state?.example?.exampleData);

  return (
    <>
      <Head>
        <title>Ex1</title>
      </Head>
      <h1 className="abc">Example: Static generation page (Tạo trang tĩnh)</h1>
      <em>getStaticProps</em>
      <div>{post?.name}</div>
      {exampleData && <p>{exampleData}</p>}
    </>
  );
};

export const getStaticProps = async () => {
  const post = { name: 'John Doe' };
  if (!post) {
    return {
      notFound: true,
    };
    // Or
    // return {
    //   redirect: {
    //     destination: '/',
    //     permanent: false,
    //     // statusCode: 301
    //   },
    // }
  }

  return {
    props: {
      post,
    },
  };
};

export default Ex1;
