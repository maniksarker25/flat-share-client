import Footer from "@/components/Shared/Footer/Footer";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
const DynamicNavbar = dynamic(
  () => import("@/components/Shared/Navbar/Navbar"),
  {
    ssr: false,
  }
);
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <DynamicNavbar />
      {children}
      <Footer />
    </Box>
  );
};

export default CommonLayout;
