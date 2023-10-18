import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({text, link, className, type}) => {
  return (
    <Link to={link} className="shadow-md active:scale-95 rounded-md bg-transparent shadow-slate-800/40 inline-block h-full w-full">
        <button type={type} className={`px-10 py-3 bg-transparent buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary ${className}`}>{text}</button>
      </Link>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
}

export default Button