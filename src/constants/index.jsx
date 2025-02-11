import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
                hasSubmenu: true,  // Indicates submenu presence
                submenu: [
                    { label: "Title 1", path: "/dashboard/title1" },
                    { label: "Title 2", path: "/dashboard/title2" },
                    { label: "Title 3", path: "/dashboard/title3" },
                    { label: "Title 4", path: "/dashboard/title4" },
                ],
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
                hasSubmenu: true,  // Indicates submenu presence
                submenu: [
                    { label: "Title 1", path: "/Analytics/title1" },
                    { label: "Title 2", path: "/Analytics/title2" },
                    { label: "Title 3", path: "/Analytics/title3" },
                    { label: "Title 4", path: "/Analytics/title4" },
                ],
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Schemes",
        links: [
            {
                label: "Schemes",
                icon: Package,
                path: "/products",
            },
            {
                label: "New Schemes",
                icon: PackagePlus,
                path: "/new-product",
            },
        ],
    },
    {
        title: "Users",
        links: [
            {
                label: "Users",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New User",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified User",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];