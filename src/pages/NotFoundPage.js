import UserNavbar from "../components/NavbarAccount";
import Error from "../components/Error";
import notFoundImage from "../images/not-found.png";

const NotFoundPage = () => {
  return (
    <div>
      <UserNavbar />
      <Error
        errorImage={notFoundImage}
        statusCode={404}
        errorTitle={"Page Not Found"}
        errorMessage={"Sorry, the page you are looking for does not exist."}
      />
    </div>
  );
};

export default NotFoundPage;
