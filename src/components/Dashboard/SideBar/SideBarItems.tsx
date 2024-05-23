import { TSideBarItem } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

import { usePathname } from "next/navigation";

type TProps = {
  item: TSideBarItem;
};

const SideBarItems = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item?.path}`;
  const pathName = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item?.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item?.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItems;
