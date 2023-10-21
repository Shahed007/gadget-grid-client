import PropTypes from 'prop-types';
import useAuthContext from '../../hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuthContext();
  const location = useLocation();


  const isLoading= (
    <>
     <div className='h-screen w-full flex justify-center items-center'>
      <span className="loading loading-ring loading-lg"></span>
    </div>
    </>
  )
  
  if(loading){
    return isLoading;
  }

  if(user){
    return children;
  }

  return <Navigate state={location.pathname} to="/signIn"></Navigate>

}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute