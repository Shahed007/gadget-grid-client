import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-6xl mx-auto px-4 xl:p-5 h-full">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
