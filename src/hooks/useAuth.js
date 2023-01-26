import authSelectors from '../redux/Auth/auth-selectors';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUserName);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
export default useAuth;
