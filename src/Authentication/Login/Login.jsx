import React, { useContext} from "react";
import LoginLayout from "./LoginLayout";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
  const { loginWithPass, googleSignIn } = useContext(AuthContext);

  const HandleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithPass(email, password)
      .then((userCredential) => {
        swal("Good job!", "Logged in successfully!", "success");
      })
      .catch((error) => {
        swal("Opps!", error.message , "error");
      });
  };

  const HandleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        swal("Good job!", "Logged in successfully!", "success");
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
