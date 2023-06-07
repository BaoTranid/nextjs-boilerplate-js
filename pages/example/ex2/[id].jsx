import { useRouter } from 'next/router';

const Ex2 = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Example: Dynamic Routes (Tạo trang tĩnh)</h1>
      <em>getStaticPaths</em>
      <div>
        <ul>
          <li>id: {data?.id}</li>
          <li>name: {data?.name}</li>
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = { name: 'John Doe' };
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const list = [
    {
      id: 1,
      name: 'Done',
    },
    {
      id: 2,
      name: 'In',
    },
    {
      id: 3,
      name: 'Out',
    },
  ];
  const paths = list?.map(elm => ({
    params: { id: elm?.id?.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export default Ex2;
