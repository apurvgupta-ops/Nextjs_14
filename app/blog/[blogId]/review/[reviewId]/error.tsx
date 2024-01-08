"use client";
import React from "react";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>Error in reviwe {error.message}</div>;
};

export default ErrorBoundary;
