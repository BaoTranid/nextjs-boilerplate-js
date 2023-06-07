import react, { useCallback, useEffect, useState } from 'react';

const Ex3 = () => {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchList = useCallback(() => {
    setLoading(true);
    fetch('/')
      .then(res => res?.json())
      .then(data => {
        setList(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    return () => {
      fetchList();
    };
  }, [fetchList]);

  return (
    <div>
      <h1>Example: Client-side data fetching</h1>
      <div>
        {isLoading && 'Loading...'}
        {!isLoading &&
          list?.map((elm, index) => (
            <div key={index}>
              <li>id: {elm?.id}</li>
              <li>name: {elm?.name}</li>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ex3;
