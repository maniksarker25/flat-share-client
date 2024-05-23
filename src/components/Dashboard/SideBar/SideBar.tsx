import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import logo from "@/assets/images/logo/house-share-logo-icon-design-vector-22925067-removebg-preview.png";
import Link from "next/link";
// import { generateDrawerItems } from "@/utils/generateDrawerItems";

// import SideBarItems from "./SideBarItems";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/authServices";
import { generateSideBarItems } from "@/utils/generateSidebarItems";
import { TUserRole } from "@/types";
import SideBarItems from "./SideBarItems";
const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        component={Link}
        href={"/"}
        sx={{
          py: 1,
          mt: 1,
        }}
      >
        <Image src={logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component={"h1"}>
          MS Health Care
        </Typography>
      </Stack>
      <List>
        {generateSideBarItems(userRole as TUserRole).map((item, index) => (
          <SideBarItems key={index} item={item}></SideBarItems>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
