import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";

import KeyIcon from "@mui/icons-material/Key";
import { TSideBarItem, TUserRole } from "@/types";
import { USER_ROLE } from "@/constants/role";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
export const generateSideBarItems = (role: TUserRole): TSideBarItem[] => {
  const menuItems: TSideBarItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `profile`,
      icon: CalendarMonthIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      menuItems.push(
        {
          title: "User Management",
          path: `${role}/user-management`,
          icon: GroupIcon,
        },
        {
          title: "Flat Management",
          path: `${role}/flat-management`,
          icon: HomeWorkIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: TryIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...menuItems, ...defaultMenus];
};
