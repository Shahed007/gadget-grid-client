import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return (
    <button
      className={` ${className} px-10 py-2  dark:text-white bg-transparent buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary shadow-md active:scale-95   shadow-slate-800/40 inline-block h-full w-full`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
