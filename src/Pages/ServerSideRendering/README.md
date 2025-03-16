Q1. What is server-side rendering (SSR) in React?

Definition:
Server-Side Rendering (SSR) in React is the process of rendering React components on the server instead of the browser. The server generates the complete HTML for a page and sends it to the client, improving performance, SEO, and initial page load speed.

How SSR Works
User requests a page → Browser sends a request to the server.
Server processes the request → React renders the UI into HTML on the server.
Server sends the pre-rendered HTML to the browser.
Hydration occurs → React takes over on the client-side to enable interactivity.
Hydration is the process where React attaches event listeners to the server-rendered HTML, making it fully interactive.

Why Use SSR?
✅ Faster First Contentful Paint (FCP) → Users see content sooner.
✅ Better SEO → Search engines can index pre-rendered content easily.
✅ Improved Performance → Reduces initial JavaScript execution time.
✅ Better for slow networks → Renders content before JavaScript loads.

SSR vs. CSR (Client-Side Rendering)
Feature	Server-Side Rendering (SSR)	Client-Side Rendering (CSR)
Initial Load Speed	⚡ Fast (pre-rendered HTML)	🐢 Slow (waits for JS execution)
SEO	✅ Excellent	❌ Poor (without pre-rendering)
Time to First Byte (TTFB)	⏳ Slower (server processing needed)	⚡ Fast (static assets)
Interactivity	🚀 Hydration required	✅ Directly interactive
Best For	Blogs, E-commerce, Landing Pages	Web apps, Dashboards, SPAs
Implementing SSR in React with Next.js
React alone does not support SSR out of the box, but Next.js makes it easy.

1. Setting up Next.js
sh
Copy
Edit
npx create-next-app@latest my-ssr-app
cd my-ssr-app
npm run dev
2. Creating an SSR Page
In Next.js, you use getServerSideProps() to enable SSR.

jsx
Copy
Edit
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
🔹 What happens here?

getServerSideProps() runs on the server before sending the page.
The page is pre-rendered with fetched data and sent to the client.
When to Use SSR?
✅ SEO-heavy websites (e.g., blogs, news portals)
✅ E-commerce platforms (dynamic pricing, stock availability)
✅ Data-fetching pages (real-time data updates)

🚫 Avoid SSR if:

Your app is mostly interactive and does not need SEO.
You have a complex frontend state that SSR won't help with.
Final Thoughts
SSR improves SEO, performance, and first load speed.
Next.js is the best way to implement SSR in React.
Use SSR when your content needs frequent updates and SEO is a priority.