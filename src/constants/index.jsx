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
                    { label: "Title 1", path: "/titlepage" },
                    { label: "Title 2", path: "/titlepage2" },
                    { label: "Title 3", path: "/titlepage3" },
                    { label: "Title 4", path: "/titlepage4" },
                ],
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
                hasSubmenu: true,  // Indicates submenu presence
                submenu: [
                    { label: "Title 1", path: "/titlepage5" },
                    { label: "Title 2", path: "/titlepage6" },
                    { label: "Title 3", path: "/titlepage7" },
                    { label: "Title 4", path: "/titlepage8" },
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