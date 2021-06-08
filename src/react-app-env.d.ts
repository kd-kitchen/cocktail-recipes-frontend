/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    REACT_APP_BASE_API: string;
  }
}

declare module "*.css";
declare module "*.png";
declare module "*.svg";
declare module "*.md";

type LoadingState = "REQUEST" | "SUCCESS" | "FAILURE";
