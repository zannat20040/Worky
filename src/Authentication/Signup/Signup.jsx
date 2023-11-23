import React, { useContext } from "react";
import SignupLayout from "./SignupLayout";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from 'sweetalert';
import { useLocation, useNavigate } from "react-router-dom";
import { imgUpload } from "../../api/ImgUpload";

const Signup = () => {
  const { createWithPass , googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const HandleSignup = async(e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
   const image = form.photo.files[0];
    const photo = await imgUpload(image)    

    // console.log(name, email, password, url);

    createWithPass(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        swal("Good job!", "Signed up successfully!", "success");
        navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')

        updateProfile(user ,{
          displayName: name,
          photoURL: photo
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
      navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')

    }).catch((error) => {
      swal("Opps!", error , "error");
    });
}

  return <SignupLayout HandleSignup={HandleSignup} HandleGoogleSignin={HandleGoogleSignin}></SignupLayout>;
};

export default Signup;
