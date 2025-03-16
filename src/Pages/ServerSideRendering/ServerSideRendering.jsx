export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return { props: { post: data } };
}

const SSRPage = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SSRPage;
