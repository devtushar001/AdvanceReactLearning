Higher-Order Components (HOCs) in React
Definition:
A Higher-Order Component (HOC) is an advanced React pattern for reusing component logic. It is a function that takes a component as an argument and returns a new enhanced component.

HOCs allow developers to share behavior between components without modifying their structure, making them useful for concerns like authentication, permissions, or data fetching.


How HOCs Work
A HOC is a function with the following signature:

jsx
Copy
Edit
const withEnhancement = (WrappedComponent) => {
  return (props) => {
    // Modify props or behavior
    return <WrappedComponent {...props} />;
  };
};
WrappedComponent: The original component to be enhanced.
The HOC returns a new component that wraps the original one.


Use Cases of HOCs
Code Reusability - Share logic between multiple components.
Authentication & Authorization - Wrap components to check login status.
Data Fetching - Fetch data before rendering a component.
Enhancing UI Behavior - Add animations, styling, or event handling.
Common HOCs in React Libraries
Redux's connect(): Connects components to the Redux store.
React Router's withRouter(): Provides routing props to a component.
HOCs vs. Render Props vs. Hooks
Feature	HOCs	Render Props	Hooks
Reusability	✅ Yes	✅ Yes	✅ Yes
Code Complexity	🚀 Medium	🚀 High	🎯 Simple
Performance Overhead	🔥 Can be High	🔥 Can be High	⚡ Efficient
Use Case	Logic reusability	Dynamic rendering	State & side-effects
🔥 Hooks are now preferred over HOCs because they simplify state management and side-effects.

Limitations of HOCs
Wrapper Hell: Too many HOCs can make debugging difficult.
Prop Collisions: If the HOC and the Wrapped Component use the same prop names, conflicts may occur.
Performance Overhead: Extra re-rendering may happen due to unnecessary prop passing.
Final Thoughts
HOCs are a powerful pattern for logic reusability.
React Hooks (like useEffect and useContext) have largely replaced HOCs in many cases.
However, HOCs are still useful in legacy codebases and certain advanced scenarios.