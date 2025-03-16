Definition:- React Suspense is a feature that allows you to handle asynchronous operations (like data fetching) in a declarative way. It lets components "wait" for something before rendering, like fetching data or loading code dynamically.

Why use Suspense?
Improves user experience by showing a fallback UI while loading.
Simplifies handling async operations.
Works well with React Concurrent Mode for smoother UI updates.


Basic Example
Here’s how you use Suspense with React.lazy() to load a component dynamically:


import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
