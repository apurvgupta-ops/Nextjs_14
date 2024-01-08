"use client";
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
