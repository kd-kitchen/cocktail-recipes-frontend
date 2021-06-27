import React from "react";
import AccountMasterPage from "./Account";
import Home from "./Home";
import IngredientMasterPage from "./Ingredients";
import RecipeMasterPage from "@/pages/Recipes";

type Route = {
  path: string;
  exact?: boolean;
  sectionName?: string;
  skipMenu?: boolean;
  component: React.ReactElement | null;
};

const routes: Route[] = [
  { path: "/", exact: true, skipMenu: true, component: <Home /> },
  { path: "/account", skipMenu: true, component: <AccountMasterPage /> },
  { path: "/recipes", sectionName: "Browse Recipes", component: <RecipeMasterPage /> },
  { path: "/ingredients", sectionName: "Ingredients", component: <IngredientMasterPage /> },
  { path: "/contact", sectionName: "Contact Us", component: <div>To Do</div> },
];

export default routes;
