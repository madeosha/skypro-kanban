import React from 'react';
import Login from "../components/Auth/Login"

const LoginPage = ({setIsAuth}) => {
  return (
    <Login setIsAuth={setIsAuth} />
  )
}

export default LoginPage;
