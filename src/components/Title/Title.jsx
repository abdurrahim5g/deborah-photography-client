import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ children, subtitle }) => {
  return (
    <h2 className="site-title">
      {subtitle ? subtitle : "Our "} <span>{children}</span>
    </h2>
  );
};

export default Title;
