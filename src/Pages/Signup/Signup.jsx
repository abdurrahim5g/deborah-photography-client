import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import google from "../../assets/images/google.png";
import { useState } from "react";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useAuthContex } from "../../Contex/AuthProvider";
import { updatePageTitle } from "../../utility/utility";

const Signup = () => {
  updatePageTitle("Signup");
  const [userInfo, setUserInfo] = useState({});
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  // contex provider
  const { providerSignIn, createUser } = useAuthContex();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: userInfo.name,
          photoURL: userInfo.photoURL,
        });
        navigate("/");
      })
      .catch((err) => console.log(err.code));
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Provider sign in handler
  const googleProvider = new GoogleAuthProvider();
  const handleProviderSignIn = (provider) => {
    providerSignIn(provider)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err.code));
  };

  return (
    <section className="bg-white">
      <div
        className="lg:grid lg:min-h-screen lg:grid-cols-12"
        style={{ minHeight: "calc(100vh - 110px)" }}
      >
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://img.freepik.com/free-photo/groom-bride-with-pink-hair-stand-before-door-with-flower-garlands-light_8353-1440.jpg?w=996&t=st=1687064879~exp=1687065479~hmac=517ed1f4768ba85cf510c749dd09eec9dd95a3efd6f3bf5d42b61d071e145687"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form
              onSubmit={handleSubmit}
              action="#"
              className="mt-8 grid grid-cols-1 gap-6 login-signup-form"
            >
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="photoURL"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>

                <input
                  type="url"
                  id="photoURL"
                  name="photoURL"
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className=" ">
                <label htmlFor="tramsAgree" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="tramsAgree"
                    name="tramsAgree"
                    onClick={() => setAgree(!agree)}
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I accept your{" "}
                    <Link className="text-blue-500" to="/trams-and-condition">
                      Trams and Condition
                    </Link>
                  </span>
                </label>
              </div>

              <div className="  sm:flex sm:items-center sm:gap-4">
                <button
                  className={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ${
                    !agree && "opacity-50"
                  }`}
                  disabled={!agree}
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>

            <div className="continue-with-google mt-8 text-center">
              <button
                className="border-0 outline-non max-w-xs "
                onClick={() => handleProviderSignIn(googleProvider)}
              >
                <img src={google} alt="Google" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
