import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "../../data/menus";
import AccordionComp from "../Accordion/Accordion";
import { IMenuItem } from "../../types/menu";
import { useState } from "react";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState("");
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const clickedHandler = (item: string) => {
    setClicked(item);
  };
  const revursiveItems = (menuItem: IMenuItem) => {
    if (!menuItem.hasChildren) {
      return (
        <AccordionComp
          title={menuItem?.title}
          content=""
          onClick={() => clickedHandler(menuItem?.title)}
          clicked={clicked === menuItem.title}
        />
      );
    } else {
      return (
        <AccordionComp
          title={menuItem?.title}
          content={menuItem?.children?.map((child) => revursiveItems(child))}
          onClick={() => clickedHandler(menuItem?.title)}
          clicked={clicked === menuItem.title}
        />
      );
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250, padding: "10px" }} role="presentation">
      {menuItems?.map((item) => (
        <Box sx={{ my: "20px" }} key={item.title}>
          {revursiveItems(item as IMenuItem)}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center" ,justifyContent: "space-between" }}>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <img src="/logo.svg" alt="Logo" className="mr-3" />
    </Box>
  );
}
