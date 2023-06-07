const Ex4 = ({ list }) => {
  return (
    <div>
      <h1>Example: Server-Side Rendering</h1>
      <em>getServerSideProps</em>
      <div>
        {list?.map(({ id, name }, index) => (
          <div key={index}>
            <li>id: {id}</li>
            <li>name: {name}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

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
  return {
    props: {
      list,
    },
  };
};

export default Ex4;
