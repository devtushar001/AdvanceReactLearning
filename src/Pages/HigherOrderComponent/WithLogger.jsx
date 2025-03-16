import React from "react";

// Higher-Order Component
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props received:", props);
    return <WrappedComponent {...props} />;
  };
};

// Regular Component
const UserProfile = ({ name }) => {
  return <h2>User: {name}</h2>;
};

// Enhanced Component
const UserProfileWithLogger = withLogger(UserProfile);

export default function HigherOrder() {
  return <UserProfileWithLogger name="Tushar" />;
}
