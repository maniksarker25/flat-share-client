import Advice from "@/components/UI/HomePage/Advice/Advice";
import FlatList from "@/components/UI/HomePage/FlatList/FlatList";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchBar from "@/components/UI/HomePage/SearchBar/SearchBar";
import Testimonial from "@/components/UI/HomePage/Testimonial/Testimonial";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FlatList />
      <Advice />
      <Testimonial />
    </div>
  );
};

export default HomePage;
