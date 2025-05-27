import * as React from "react";

const LocalError = ({ error, touched }) => {
  // console.log({error,touched})
  if (error) {
    return <div className="text-danger">{error}</div>;
  }
  return <div />;
};

export default LocalError;
