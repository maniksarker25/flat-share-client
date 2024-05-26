import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/authServices";
import { Button } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
  };
  return (
    <>
      {userInfo?.email ? (
        <Button
          onClick={handleLogout}
          component={Link}
          href="/login"
          color="error"
        >
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
