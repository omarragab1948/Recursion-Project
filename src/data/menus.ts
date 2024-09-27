import { IMenuItem } from "../types/sidebar";
export const menuItems: IMenuItem[] = [
  {
    title: "Home",
    hasChildren: false,
  },
  {
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
    title: "Ecommerce",
    hasChildren: false,
  },
  {
    title: "Authentication",
    hasChildren: false,
  },
  {
    title: "Notification",
    hasChildren: false,
  },
  {
    title: "Calendar",
    hasChildren: false,
  },
  {  title: "Message", hasChildren: false },
];
