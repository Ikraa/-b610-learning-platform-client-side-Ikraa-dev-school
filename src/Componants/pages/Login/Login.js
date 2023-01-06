import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const [updateProfile, updating, errortwo] = useUpdateProfile(auth);
  const [signInWithGoogle, googleuser, gooleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gituser, gitloading, giterror] =
    useSignInWithGithub(auth);
  const location = useLocation();
  const form = location?.state?.from?.pathname;

  console.log(location, "location");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [loginuser,loginloading]=useAuthState(auth)
  const [
    signInWithEmailAndPassword,
    signin_user,
    signin_loading,
    siginin_error,
  ] = useSignInWithEmailAndPassword(auth);
  const [inputValue, setInputValue] = useState({
    userName: "",
    email: "",
    password: "",
    url: "",
  });

  const handleSubmit = async (e) => {
    if (isSignUp) {
      await createUserWithEmailAndPassword(
        inputValue.email,
        inputValue.password
      );
      await updateProfile({
        displayName: inputValue.userName,
        photoURL: inputValue.url,
      });
      setInputValue({ userName: "", email: "", password: "", url: "" });
    } else {
      signInWithEmailAndPassword(inputValue.email, inputValue.password);
    }
  };
  
    if (signin_user || googleuser || gituser || user || loginuser) {
      console.log("get the suer");
      navigate(form,{replace:true});
      // console.log(user, "user");
    }
  
  
  console.log(inputValue);
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col w-[500px] py-[30px] lg:flex-row-reverse">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body py-[50px]">
              <div className="form-control">
                <p className="text-white text-4xl font-semibold text-center mb-5">
                  {isSignUp ? "SIGN UP" : "LOGIN"}
                </p>
                {isSignUp && (
                  <>
                    {" "}
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      onBlur={(e) => {
                        setInputValue({
                          ...inputValue,
                          userName: e.target.value,
                        });
                      }}
                      className="input input-bordered"
                    />
                  </>
                )}
                {isSignUp && (
                  <>
                    {" "}
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo url"
                      onBlur={(e) => {
                        setInputValue({ ...inputValue, url: e.target.value });
                      }}
                      className="input input-bordered"
                    />
                  </>
                )}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onBlur={(e) => {
                    setInputValue({ ...inputValue, email: e.target.value });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  onBlur={(e) => {
                    setInputValue({ ...inputValue, password: e.target.value });
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleSubmit} className="btn btn-primary">
                  {isSignUp ? "Sign UP" : "Login"}
                </button>
                <p className="text-sm font-bold mt-3">
                  {isSignUp ? "Have an account?" : "Don't have a accountn?"}{" "}
                  <span
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-purple-800 text-lg font-bold cursor-pointer"
                  >
                    {isSignUp ? "Login" : "Sign Up"}
                  </span>
                </p>
              </div>

              <div>
                <button
                  className="btn btn-primary w-full mb-2 text-white font-semibold"
                  onClick={() => signInWithGoogle()}
                >
                  Google Sign In
                </button>
                <button
                  className="btn btn-primary w-full mb-2 text-white font-semibold"
                  onClick={() => signInWithGithub()}
                >
                  GitHub Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
