import authSelectors from '../redux/Auth/auth-selectors';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUserName);
  return {
    isLoggedIn,
    user,
  };
};
export default useAuth;
