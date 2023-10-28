import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MainLogo } from "../Icons/Icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .min(6)
    .max(32)
    .required("Confirm password is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  // Xử lí data tại đây giao tiếp với BE
  const onSubmit = (data) => {
    console.log(data);
    if (!Object.keys(errors).length) {
      const { username, password, password2 } = data;
      navigate("/Login");
    }
  };

  return (
    <div className="registerContainter w-[620px]  rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <div className="header flex items-center justify-center mt-[20px]">
        <MainLogo></MainLogo>
        <h1 className="font-bold text-[34px] text-[#61FF00] ml-4">
          File-Sharing Register
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col w-full items-center my-[24px]">
          <label
            htmlFor="username"
            className="text-[24px] font-bold inline-block w-full pl-[60px] mb-[15px]"
          >
            Username
          </label>
          <input
            {...register("username")}
            name="username"
            type="text"
            id="username"
            className="w-[500px] h-[80px] bg-[#373737] text-[24px] text-white px-4 outline-none rounded-lg"
          />
          <span className="text-[white] text-[24px]">
            {errors?.username?.message}
          </span>
        </div>

        <div className="flex flex-col w-full items-center my-[24px]">
          <label
            htmlFor="password"
            className="text-[24px] font-bold inline-block w-full pl-[60px] mb-[15px]"
          >
            Password
          </label>
          <input
            {...register("password")}
            name="password"
            type="password"
            id="password"
            className="w-[500px] h-[80px] bg-[#373737] text-[24px] text-white px-4 outline-none rounded-lg"
          />
          <span className="text-[white] text-[24px]">
            {errors?.password?.message}
          </span>
        </div>

        <div className="flex flex-col w-full items-center my-[24px]">
          <label
            htmlFor="password2"
            className="text-[24px] font-bold inline-block w-full pl-[60px] mb-[15px]"
          >
            Confirm password
          </label>
          <input
            {...register("password2")}
            name="password2"
            type="password"
            id="password2"
            className="w-[500px] h-[80px] bg-[#373737] text-[24px] text-white px-4 outline-none rounded-lg"
          />
          <span className="text-[white] text-[24px]">
            {errors?.password2?.message}
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#61FF00] w-[500px] h-[80px] p-2 mx-auto block rounded-lg mt-[47px] text-[24px] font-bold"
        >
          Create User
        </button>
      </form>

      <div className="flex items-center justify-center text-[24px] font-bold my-[25px]">
        Adready have an account?
        <Link to="/Login">
          <span className="text-[#61FF00] decoration-none ml-2">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
