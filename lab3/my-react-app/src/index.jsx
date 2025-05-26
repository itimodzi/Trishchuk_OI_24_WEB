import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MyRecipies from "./pages/MyRecipes"
import AddRecipe from "./pages/AddRecipe"
import CategoriesPage from "./pages/CategoriesPage"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/my-recipes" element={<MyRecipies />} />
      <Route path="/add-recipy" element={<AddRecipe />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </BrowserRouter>
);