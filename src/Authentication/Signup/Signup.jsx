import React, { useContext } from "react";
import SignupLayout from "./SignupLayout";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from 'sweetalert';

const Signup = () => {
  const { createWithPass , googleSignIn} = useContext(AuthContext);

  const HandleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;

    // console.log(name, email, password, url);

    createWithPass(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        swal("Good job!", "Signed up successfully!", "success");

        updateProfile(user ,{
          displayName: name,
          photoURL: url
        })
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          });

      })
      .catch((error) => {
        swal("Opps!", error.message , "error");
      });

  };

const HandleGoogleSignin =()=>{
  googleSignIn()
    .then((result) => {
      swal("Good job!", "Signed up successfully!", "success");
    }).catch((error) => {
      swal("Opps!", error , "error");
    });
}

  return <SignupLayout HandleSignup={HandleSignup} HandleGoogleSignin={HandleGoogleSignin}></SignupLayout>;
};

export default Signup;
