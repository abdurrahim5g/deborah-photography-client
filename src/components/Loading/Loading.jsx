import loading from "./loading.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <section className="loading-component">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <img src={loading} alt="Loading" className="mx-auto" />
            <h3 className="font-medium mt-4 text-2xl">Loading...</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
