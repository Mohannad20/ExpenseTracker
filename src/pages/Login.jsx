import React from "react";
import { set, useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm(
    {defaultValues: { rememberMe: false }}
  );

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    clearErrors();
    try {
      await setPersistence(auth, data.rememberMe ? browserLocalPersistence : browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("successfully login", userCredential);
      navigate("/");
    } catch (error) {
      console.error("error during login:", error.code);
      
      // Handle specific Firebase auth errors
      switch (error.code) {
        case 'auth/user-not-found':
          setError("root", {
            type: "manual",
            message: "No account found with this email",
          });
          break;
        case 'auth/wrong-password':
          setError("root", {
            type: "manual",
            message: "Incorrect password",
          });
          break;
        case 'auth/invalid-email':
          setError("email", {
            type: "manual",
            message: "Invalid email format",
          });
          break;
        case 'auth/too-many-requests':
          setError("root", {
            type: "manual",
            message: "Too many attempts. Please try again later",
          });
          break;
        default:
          setError("root", {
            type: "manual",
            message: "Login failed. Please try again",
          });
      }
    }
  };

  const signInWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      console.log("successfully login with github", userCredential);
      navigate("/");
    } catch (error) {
      console.error("GitHub auth error:", error);
      setError("root", {
        type: "manual",
        message: "error during sign in with google",
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCrednetial = await signInWithPopup(auth, provider);
      console.log("successfully login with google", userCrednetial);
      navigate("/");
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "error during sign in with github",
      });
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError("msgResetPass", {
        type: "manual",
        message: 'Password reset email sent! Check your inbox.'
      });
    } catch (error) {
      setError('root', {
        type : 'manual',
        message : error.message
      })
    }
  }
  return (
    <div className="flex justify-center mt-16 min-h-screen">
      <div className="flex flex-col justify-center  h-fit rotating-border py-6 px-10 bg-opacity-5 bg-neutral-200">
        <h2 className="text-center mb-4 text-xl">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="text"
              name="email"
              // onFocus={() => {
              //   clearErrors("email");
              // }}
              // onChange={() => {
              //   clearErrors('email');
              //   clearErrors('root');
              // }}
              placeholder="name@email.me"
              className="px-2 py-1 w-96 border border-white bg-background rounded"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "invalid email",
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              // onFocus={() => {
              //   clearErrors("password");
              // }}
              // onChange={() => {
              //   clearErrors('password');
              //   clearErrors('root');
              // }}
              className="px-2 py-1 w-96 border border-white bg-background rounded"
              {...register("password", { required: "password is required" })}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}

            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}
            {errors.msgResetPass && (
              <div className="text-green-500 my-1">{errors.msgResetPass.message}</div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                name="rememberMe"
                {...register("rememberMe")}
                className="rounded border-gray-300"
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            
          </div>
          <div className="flex flex-row">
            <Button className="">
              <LogIn />
              <span>Login</span>
            </Button>
            <Link to="/signup">
              <Button variant="link" className="text-center">
                Signup
              </Button>
            </Link>
            
          </div>
          <div className="text-center mb-2">
              <button
                type="button"
                onClick={() => handleForgotPassword(getValues("email"))}
                className="text-blue-500 hover:text-blue-700"
              >
                Forgot Password?
              </button>
            </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex items-center mb-4">
              <div className="border-t border-gray-400 flex-grow"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="border-t border-gray-400 flex-grow"></div>
            </div>
            <div className="flex flex-row gap-3">
              <Button
                type="button"
                onClick={signInWithGoogle}
                className="flex items-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                Sign in with Google
              </Button>
              <Button
                type="button"
                onClick={signInWithGithub}
                className="flex items-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="Github logo"
                  className="w-5 h-5"
                />
                Sign in with Github
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
