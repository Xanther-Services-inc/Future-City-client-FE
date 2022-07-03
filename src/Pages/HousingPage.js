import React, { useEffect } from "react";
import HeroSection from "../Component/HeroSection";
import MenuAppBar from "../Component/MenuAppBar";
import ProductCard from "../Component/ProductCard";

export default function HousingPage() {
  useEffect(() => {
    const status = localStorage.getItem("authenticated");
    if (!status) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <MenuAppBar />
      <HeroSection />
      <ProductCard />
    </>
  );
}
