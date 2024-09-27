import { IMenuItem } from "../types/sidebar";
import HomeImage from "/Home.svg";
import PagesImage from "/pages.svg";
import ApplicationImage from "/application.svg";
import BasketImage from "/basket.svg";
import AuthenticationImage from "/authentication.svg";
import NotificationImage from "/notification.svg";
import CalendarImage from "/calendar.svg";
import MessageImage from "/message.svg";
export const menuItems: IMenuItem[] = [
  {
    image: HomeImage,
    title: "Home",
    hasChildren: false,
  },
  {
    image: PagesImage,
    title: "Pages",
    hasChildren: true,
    children: [
      {
        title: "Profile",
        hasChildren: true,
        children: [
          { title: "Overview" },
          { title: "All Projects" },
          {
            title: "Users",
            hasChildren: true,
            children: [
              { title: "Overview" },
              { title: "All Projects" },
              { title: "Settings" },
            ],
          },
          {
            title: "Account",
            hasChildren: true,
            children: [
              { title: "Edit Profile" },
              { title: "Privacy Settings" },
            ],
          },
          {
            title: "Projects",
            hasChildren: true,
            children: [
              { title: "Current Projects" },
              { title: "Archived Projects" },
            ],
          },
        ],
      },
    ],
  },
  {
    image: ApplicationImage,
    title: "Applications",
    hasChildren: true,
    children: [
      {
        title: "Profile",
        hasChildren: false,

      },
    ],
  },
  {
    image: BasketImage,
    title: "Ecommerce",
    hasChildren: false,
  },
  {
    image: AuthenticationImage,
    title: "Authentication",
    hasChildren: false,
  },
  {
    image: NotificationImage,
    title: "Notification",
    hasChildren: false,
  },
  {
    image: CalendarImage,
    title: "Calendar",
    hasChildren: false,
  },
  { image: MessageImage, title: "Message", hasChildren: false },
];
