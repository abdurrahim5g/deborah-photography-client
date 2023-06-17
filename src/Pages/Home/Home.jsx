import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Stats from "../../components/Stats/Stats";
import Hero from "./Hero/Hero";
import "./Home.css";

const Home = () => {
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
