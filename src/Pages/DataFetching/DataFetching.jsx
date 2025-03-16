// Fetching data with fetch

import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => {setData(json); console.log(json)}) // Update state with data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Post Title: {data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default FetchExample;
