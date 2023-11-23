import React, { useContext} from "react";
import LoginLayout from "./LoginLayout";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { loginWithPass, googleSignIn } = useContext(AuthContext);
const navigate = useNavigate()
const location = useLocation()
  const HandleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithPass(email, password)
      .then((userCredential) => {
        swal("Good job!", "Logged in successfully!", "success");
      
      //   axios.post('https://server-side-taupe.vercel.app/jwt',{email}, {withCredentials:true})
      //  .then(res=>{
      //   console.log(res.data)
      //  })
      //  .catch(error=>{
      //   console.log(error)
      //  })
       
      navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')

      })
      .catch((error) => {
        swal("Opps!", error.message , "error");
      });
  };

  const HandleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {

      //   axios.post('https://server-side-taupe.vercel.app/jwt',{result}, {withCredentials:true})
      //  .then(res=>{
      //   console.log(res.data)
      //  })
      //  .catch(error=>{
      //   console.log(error)
      //  })
        swal("Good job!", "Logged in successfully!", "success");
        navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')

      })
      .catch((error) => {
        swal("Opps!", error , "error");
      });
  };

 
  
  return (
    <LoginLayout
      HandleLogin={HandleLogin}
      HandleGoogleSignin={HandleGoogleSignin}
    ></LoginLayout>
  );
};

export default Login;
