import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
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
      icon: PersonIcon,
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
          title: "Post Flat Info",
          path: `${role}/post-flat-info`,
          icon: AddIcon,
        },
        {
          title: "My Flat Posts",
          path: `${role}/my-flat-posts`,
          icon: TryIcon,
        },
        {
          title: "My Requests",
          path: `${role}/my-requests`,
          icon: MedicalInformationIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...menuItems, ...defaultMenus];
};
