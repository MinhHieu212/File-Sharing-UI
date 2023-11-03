import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MainLogo } from "../Icons/Icons";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup.object().shape({
  hostname: yup.string().required("Hostname is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
});

const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  // Xử lí data tại đây giao tiếp với BE
  const onSubmit = (data) => {
    console.log(data);

    if (!Object.keys(errors).length) {
      navigate("/Home");
    }
  };

  return (
    <div className="registerContainter w-[620px]  rounded-lg bg-[#5A6465] shadow-lg shadow-cyan-500/50">
      <div className="header flex items-center justify-center mt-[20px]">
        <MainLogo></MainLogo>
        <h1 className="font-bold text-[34px] text-[#61FF00] ml-4">
          File-Sharing Login
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full items-center my-[24px]">
          <label
            htmlFor="hostname"
            className="text-[24px] font-bold inline-block w-full pl-[60px] mb-[15px]"
          >
            Hostname
          </label>
          <input
            {...register("hostname")}
            name="hostname"
            type="text"
            id="hostname"
            className="w-[500px] h-[80px] bg-[#373737] text-[24px] text-white px-4 outline-none rounded-lg"
          />
          <span className="text-[white] text-[24px]">
            {errors?.hostname?.message}
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

        <button
          type="submit"
          className="bg-[#61FF00] w-[500px] h-[80px] p-2 mx-auto block rounded-lg mt-[47px] text-[24px] font-bold"
        >
          Login
        </button>
      </form>

      <div className="flex items-center justify-center text-[24px] font-bold my-[25px]">
        Don't have an account?
        <Link to="/Register">
          <span className="text-[#61FF00] decoration-none ml-2">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
