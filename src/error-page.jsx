// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="absolute grid  text-center gap-10 left-1/2 translate-x-[-50%] bottom-1/2 ">
      <h1 className="font-bold text-5xl">Oops!</h1>
      <p >Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-600">
          Page Not Found !!
          {/* {error.statusText || error.message} */}
          </i>
      </p>
    </div>
  );
}