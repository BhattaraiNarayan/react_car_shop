import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen items-center justify-center">
        <p>Oops!!!!</p>
        <br />
        <h2>Something goes to death</h2>
        <br />
        <h3>{error?.message || "Page Not Found"}</h3>
      </div>
    </div>
  );
};
export default Error;