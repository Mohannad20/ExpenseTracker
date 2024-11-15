import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
// import { Signup } from "lucide-react";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("successfully", data);
  };
  return (
    <div className="flex justify-center mt-16 min-h-screen">
      <div className="flex flex-col justify-center  h-fit rotating-border py-6 px-10 bg-opacity-5 bg-neutral-200">
        <h2 className="text-center mb-4 text-xl">Signup</h2>
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
            <label htmlFor="username" className="mb-1">
              username:
            </label>
            <input
              type="username"
              name="username"
              placeholder="username"
              className="px-2 py-1 w-96 border border-white bg-background rounded"
              {...register("username", { required: "username is required" })}
            />
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
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
              className="px-2 py-1 w-96 border border-white bg-background rounded"
              {...register("password", { required: "password is required" })}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="cpassword" className="mb-1">
              Confirm Password:
            </label>
            <input
              type="cpassword"
              name="cpassword"
              placeholder="cpassword"
              className="px-2 py-1 w-96 border border-white bg-background rounded"
              {...register("cpassword", { required: "cpassword is required" })}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="flex flex-row">
            <Button className="">
              {/* <Signup /> */}
              <span>Signup</span>
            </Button>
            <Link to='/login'>
            <Button variant="link" className="text-center">
              Login
            </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
