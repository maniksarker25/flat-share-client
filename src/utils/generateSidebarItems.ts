import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import MedicationIcon from "@mui/icons-material/Medication";
import PaymentIcon from "@mui/icons-material/Payment";
import KeyIcon from "@mui/icons-material/Key";
import { TSideBarItem, TUserRole } from "@/types";
import { USER_ROLE } from "@/constants/role";
export const generateSideBarItems = (role: TUserRole): TSideBarItem[] => {
  console.log(role);
  const menuItems: TSideBarItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
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
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
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
