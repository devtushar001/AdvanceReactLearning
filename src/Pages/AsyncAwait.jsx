import React, { useEffect, useState } from "react";

const AsyncAwaitExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default AsyncAwaitExample;
