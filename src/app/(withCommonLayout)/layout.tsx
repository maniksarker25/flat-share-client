import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default CommonLayout;
