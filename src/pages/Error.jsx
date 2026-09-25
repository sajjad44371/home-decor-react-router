import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h2>404 Not Found</h2>
      <p>
        <small>{error.message}</small>
      </p>
    </>
  );
};

export default Error;
