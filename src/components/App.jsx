// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts'

// import Loader from 'components/Loader/Loader';

// const Home = lazy(() => import ('../pages/Home/Home') )
// const Login = lazy(() => import ('../pages/Login/Login') )
// const Register = lazy(() => import ('../pages/Register/Register') )
// const Contacts = lazy(() => import ('../pages/Contacts/Contacts') )


 

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/register'element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
    )
}
