const navbarNavigations = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Idle",
    url: "/idle",
  },
  {
    title: "Geofence",
    url: "/geofence",
  },
  {
    title: "Manage",
    url: "/manage-account",
  },
  {
    title: "Proximity",
    url: "/proximity",
  },
  {
    title: "Maintenance",
    children: [
      {
        title: "PTO Report",
        url: "/pto-report",
      },
      {
        title: "Punch Clock Report",
        url: "/punch-clock-report",
      },
    ],
  },
  {
    title: "Sign Up",
    url: "/signup",
    outlined: true,
  },
];

export default navbarNavigations;
