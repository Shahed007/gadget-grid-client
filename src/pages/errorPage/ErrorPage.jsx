import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h4 className="text-2xl font-bold text-center text-web-dark">Oops!</h4>
      <h1 className="text-5xl font-bold text-center text-web-dark my-3">{error.status}</h1>
      <p className="text-center font-bold text-web-dark text-xl">Page not found</p>
    </div>
  )
}

export default ErrorPage