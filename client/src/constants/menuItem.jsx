import {
  Home,
  LayoutTemplate,
  Utensils,
  ClipboardList,
  Calendar,
  BarChart2,
  Settings,
  User,
  LogOut,
  MessageSquareText,
  CreditCard,
  Image as ImageIcon,
  Bot,
} from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    icon: <Home className="w-5 h-5" />,
    path: "/dashboard",
  },
  {
    name: "Website Builder",
    icon: <LayoutTemplate className="w-5 h-5" />,
    subItems: [
      { name: "Edit Site", path: "/builder/edit" },
      { name: "Themes", path: "/builder/themes" },
      { name: "Media Library", path: "/builder/media" },
    ],
  },
  {
    name: "Menu Management",
    icon: <Utensils className="w-5 h-5" />,
    subItems: [
      { name: "All Items", path: "/menu/all" },
      { name: "Add Item", path: "/menu/add" },
      { name: "Categories", path: "/menu/categories" },
    ],
  },
  {
    name: "Orders",
    icon: <ClipboardList className="w-5 h-5" />,
    subItems: [
      { name: "Online Orders", path: "/orders/online" },
      { name: "In-store Orders", path: "/orders/instore" },
    ],
  },
  {
    name: "Reservations",
    icon: <Calendar className="w-5 h-5" />,
    path: "/reservations",
  },
  {
    name: "Customer Feedback",
    icon: <MessageSquareText className="w-5 h-5" />,
    path: "/feedback",
  },
  {
    name: "Analytics & Reports",
    icon: <BarChart2 className="w-5 h-5" />,
    path: "/analytics",
  },
  {
    name: "AI Assistant",
    icon: <Bot className="w-5 h-5" />,
    path: "/ai-assistant",
  },
  {
    name: "Billing & Subscription",
    icon: <CreditCard className="w-5 h-5" />,
    path: "/billing",
  },
  {
    name: "User Profile",
    icon: <User className="w-5 h-5" />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <Settings className="w-5 h-5" />,
    path: "/settings",
  },
];
