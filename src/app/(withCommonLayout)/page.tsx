import Advice from "@/components/UI/HomePage/Advice/Advice";
import CoreFeatures from "@/components/UI/HomePage/CoreFeatures/CoreFeatures";
import FlatList from "@/components/UI/HomePage/FlatList/FlatList";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchBar from "@/components/UI/HomePage/SearchBar/SearchBar";
import Testimonial from "@/components/UI/HomePage/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FlatList />
      <CoreFeatures />
      <Advice />
      <Testimonial />
    </div>
  );
};

export default HomePage;
