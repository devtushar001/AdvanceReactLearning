Q1. How do you fetch data in React? Explain it.

Fetching Data in React
In React, you can fetch data from an API using different methods, including:

Using fetch() (Native JavaScript API)
Using axios (Popular third-party library)
Using React Hooks (useEffect and useState)
Using React Query or SWR (for better caching & state management)
1. Fetching Data with fetch() (Basic Method)
fetch() is a built-in JavaScript function that allows you to make HTTP requests.

Example: Fetching data from an API
jsx
Copy
Edit
import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => setData(json)) // Update state with data
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
✅ How it works?

useEffect() runs when the component mounts.
fetch() makes an HTTP request.
The response is converted to JSON and stored in data state.
The component re-renders when data is updated.
2. Fetching Data with axios (Easier & More Powerful)
axios is a third-party library that simplifies API calls.

Install Axios:
sh
Copy
Edit
npm install axios
Example: Fetching data with Axios
jsx
Copy
Edit
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
Why Use Axios Over Fetch?
✅ Automatic JSON parsing (no need for response.json())
✅ Better error handling
✅ Supports request cancellation & timeout
✅ Supports interceptors for global request handling

3. Fetching Data with Async/Await (More Readable)
You can use async/await inside useEffect for a cleaner approach.

Example: Async/Await with Fetch
jsx
Copy
Edit
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
4. Fetching Data with React Query (Best for Performance & Caching)
For large-scale applications, use React Query, which handles: ✅ Caching
✅ Automatic Refetching
✅ Background Updates

Install React Query:
sh
Copy
Edit
npm install @tanstack/react-query
Example: Using useQuery Hook
jsx
Copy
Edit
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPost = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  return data;
};

const ReactQueryExample = () => {
  const { data, error, isLoading } = useQuery(["post"], fetchPost);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default ReactQueryExample;
💡 Why Use React Query?

Handles caching (avoids unnecessary API calls)
Supports background updates (fetches fresh data automatically)
Better user experience compared to fetch() or axios alone
5. Fetching Data with SWR (Alternative to React Query)
SWR is another library for caching, auto-refetching, and fast UI updates.

Install SWR:
sh
Copy
Edit
npm install swr
Example: Using SWR
jsx
Copy
Edit
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SWRExample = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts/1", fetcher);

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default SWRExample;
📌 SWR is better for real-time updates compared to fetch() or axios.

Which Method Should You Use?
Method	Pros	Cons	Best For
fetch()	Native, no extra package	Needs manual error handling	Small projects
axios	Easier syntax, better error handling	Needs installation	Large projects
React Query	Caching, automatic refetching	Extra learning curve	Large apps, dashboards
SWR	Real-time updates, fast UI	Requires SWR library	Live data apps
Final Thoughts
For simple apps → fetch() or axios is fine.
For performance optimization → Use React Query or SWR.
For server-side rendering (SSR) → Use Next.js with getServerSideProps().