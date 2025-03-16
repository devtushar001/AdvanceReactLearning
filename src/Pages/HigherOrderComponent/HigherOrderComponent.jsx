const withEnhancement = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};
