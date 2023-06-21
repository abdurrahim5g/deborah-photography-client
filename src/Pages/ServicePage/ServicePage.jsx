import Services from "../../components/Services/Services";
import { updatePageTitle } from "../../utility/utility";
import "./ServicePage.css";

const ServicePage = () => {
  updatePageTitle("Service");
  return (
    <>
      <Services page={true}></Services>
    </>
  );
};

export default ServicePage;
