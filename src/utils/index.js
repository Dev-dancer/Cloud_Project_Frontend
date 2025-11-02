import { FaBoxOpen, FaHome, FaShoppingCart, FaStore, FaThList } from "react-icons/fa";
import { bannerImageOne, bannerImageThree, bannerImageTwo } from "./constant";

export const bannerLists = [
  {
    id: 1,
    image: bannerImageOne,
    title: "Power Your Play",
    subtitle: "Graphics Cards",
    description: "Unleash next-gen gaming with NVIDIA & AMD GPUs at unbeatable prices",
  },
  {
    id: 2,
    image: bannerImageTwo,
    title: "Sound Redefined",
    subtitle: "Speakers & Headphones",
    description: "Immerse yourself in high-fidelity audio — music, movies, and more",
  },
  {
    id: 3,
    image: bannerImageThree,
    title: "Performance Essentials",
    subtitle: "Laptops & Components",
    description: "Upgrade your setup with top-tier processors, SSDs, and sleek laptops",
  }

];


export const adminNavigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: FaHome,
    current: true
  }, {
    name: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart
  }, {
    name: "Products",
    href: "/admin/products",
    icon: FaBoxOpen
  }, {
    name: "Categories",
    href: "/admin/categories",
    icon: FaThList
  }, {
    name: "Sellers",
    href: "/admin/sellers",
    icon: FaStore
  }
];


export const sellerNavigation = [
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart,
    current: true
  }, {
    name: "Products",
    href: "/admin/products",
    icon: FaBoxOpen
  }
];