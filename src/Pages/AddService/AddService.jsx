import { toast } from "react-hot-toast";
import { useAuthContex } from "../../Contex/AuthProvider";
import Title from "../../components/Title/Title";
import "./AddService.css";
import { useForm } from "react-hook-form";

const AddService = () => {
  // get user from AuthContex
  const { user } = useAuthContex();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const serviceObj = {
      ...data,
      contact: {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
      },
    };

    fetch(`https://photography-server-f-rahim.vercel.app/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added successfuly 😍");
          reset();
        }
        // console.log(data);
      });
  };

  return (
    <section className="add-service-page py-12 md:py-20">
      <div className="site-container">
        <div className="row">
          <Title subtitle={"Add "}>Service</Title>
        </div>

        <div className="row">
          <div className="service-form mt-8 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="single-input">
                <label htmlFor="title">Title</label>
                <input
                  defaultValue=""
                  {...register("title")}
                  id="title"
                  required
                  placeholder="Service title"
                />
              </div>

              <div className="single-input">
                <label htmlFor="image">image</label>
                <input
                  type="url"
                  defaultValue=""
                  {...register("image")}
                  id="image"
                  required
                  placeholder="Big image URL"
                />
              </div>

              <div className="single-input">
                <label htmlFor="thumbnail">thumbnail</label>
                <input
                  type="url"
                  defaultValue=""
                  {...register("thumbnail")}
                  id="thumbnail"
                  required
                  placeholder="Thumbnail image URL"
                />
              </div>

              <div className="single-input">
                <label htmlFor="desc">desc</label>
                <textarea
                  defaultValue=""
                  type=""
                  {...register("desc")}
                  id="desc"
                  rows={6}
                  required
                  placeholder="Service description"
                ></textarea>
              </div>

              <div className="single-input">
                <label htmlFor="price">price</label>
                <input
                  defaultValue=""
                  {...register("price")}
                  id="price"
                  required
                  placeholder="Ex. $2000"
                />
              </div>

              <div className="single-input">
                <label htmlFor="duration">duration</label>
                <input
                  defaultValue=""
                  {...register("duration")}
                  id="duration"
                  required
                  placeholder="Ex. 10 hours"
                />
              </div>

              <div className="single-input">
                <label htmlFor="included_services">included_services</label>
                <textarea
                  defaultValue=""
                  required
                  placeholder="Write a single service and then press enter"
                  rows={3}
                  {...register("included_services")}
                  id="included_services"
                ></textarea>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  className="rounded bg-yellow-500 hover:bg-yellow-400 px-10 py-3 text-lg font-medium text-white cursor-pointer mx-auto"
                  value={"Add Service"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
