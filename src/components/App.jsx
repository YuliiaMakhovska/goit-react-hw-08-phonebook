import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { refreshUser } from 'redux/Auth/auth-operations';
import useAuth from '../hooks/useAuth'
import RestrictedRoute from '../components/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute';
// import Loader from 'components/Loader/Loader';

const Home = lazy(() => import ('../pages/Home/Home') )
const Login = lazy(() => import ('../pages/Login/Login') )
const Register = lazy(() => import ('../pages/Register/Register') )
const Contacts = lazy(() => import ('../pages/Contacts/Contacts') )


 

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  return isRefreshing ? (<b>Refreshing user...</b>) :
 (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} /> } />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
                      <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    )
}
