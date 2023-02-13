import React, { Component } from "react";

const WithLogging = ({ WrappeComponent }) => {
  const getDisplayName = (WrappedComponent) =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  WithLogging.displayName = `WithLogging($getDisplayName(WrappedComponent)})`;

  return class extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappeComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(WrappeComponent)} is going to unmount`
      );
    }

    render() {
      return <WrappeComponent {...this.props} />;
    }
  };
};

export default WithLogging;
