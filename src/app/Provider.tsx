"use client";
import { SessionProvider } from "next-auth/react";
import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Provider: FunctionComponent<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
