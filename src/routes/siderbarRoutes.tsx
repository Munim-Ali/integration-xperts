import Dashboard from "../../public/images/siderbar-icons/dashboard.svg";
import Leaderboard from "../../public/images/siderbar-icons/leaderboard.svg";
import Cart from "../../public/images/siderbar-icons/cart.svg";
import Products from "../../public/images/siderbar-icons/products.svg";
import Sales from "../../public/images/siderbar-icons/charts.svg";
import Messages from "../../public/images/siderbar-icons/message.svg";
import Settings from "../../public/images/siderbar-icons/settings.svg";
import Signout from "../../public/images/siderbar-icons/logout.svg";

export const SiderbarMenu = [
  {
    image: Dashboard,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    image: Leaderboard,
    name: "Leaderboard",
    link: "/availability",
  },
  {
    image: Cart,
    name: "Order",
    link: "/profile",
  },
  {
    image: Products,
    name: "Products",
    link: "/ ",
  },
  {
    image: Sales,
    name: "Sales Report",
    link: "/ ",
  },
  {
    image: Messages,
    name: "Messages",
    link: "/ ",
  },
  {
    image: Settings,
    name: "Settings",
    link: "/ ",
  },
  {
    image: Signout,
    name: "Sign Out",
    link: "/ ",
  },
];
