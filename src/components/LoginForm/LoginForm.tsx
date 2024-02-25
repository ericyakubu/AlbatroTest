"use client";
import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "..";
import classes from "./LoginForm.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaLock, FaUser } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";

type Inputs = {
  username: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: FunctionComponent = () => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    rememberMe: yup.boolean().default(false),
  });

  const { control, handleSubmit, register } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const { data: session } = useSession();
  console.log({ session });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log("fixed");
  };

  return (
    <>
      {session?.user ? (
        <>
          Signed in as {session?.user?.name}
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>sign in</button>
        // <div className={classes.Container}>
        //   <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
        //     <Image
        //       src={"/images/signIn.png"}
        //       alt="logo"
        //       width={100}
        //       height={100}
        //       className={classes.Logo}
        //     />
        //     <Input
        //       type="text"
        //       control={control}
        //       name="username"
        //       label="Username"
        //       icon={<FaUser />}
        //       rules={{ required: true }}
        //     />
        //     <Input
        //       type="password"
        //       control={control}
        //       name="password"
        //       label="Password"
        //       icon={<FaLock />}
        //       rules={{ required: true }}
        //     />
        //     <Input
        //       type="checkbox"
        //       control={control}
        //       name="rememberMe"
        //       label="Keep me signed in"
        //     />
        //     <Button type="submit" text="Sign In" />
        //     <Link href="/forgotPassword">Forgot Password?</Link>
        //   </form>

        //   <p>
        //     Not a Member? <Link href="/signUp">Sign Up</Link>
        //   </p>
        // </div>
      )}
    </>
  );
};

export default LoginForm;
