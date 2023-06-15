import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <h2 className="site-title">
      Our <span>{children}</span>
    </h2>
  );
};

export default Title;
