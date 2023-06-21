import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Stats from "../../components/Stats/Stats";
import { updatePageTitle } from "../../utility/utility";
import Hero from "./Hero/Hero";
import "./Home.css";

const Home = () => {
  updatePageTitle("Home");
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Stats></Stats>
      <About></About>
    </>
  );
};

export default Home;
