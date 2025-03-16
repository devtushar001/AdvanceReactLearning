// Why Use Axios Over Fetch?
// ✅ Automatic JSON parsing (no need for response.json())
// ✅ Better error handling
// ✅ Supports request cancellation & timeout
// ✅ Supports interceptors for global request handling

import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default AxiosExample;
