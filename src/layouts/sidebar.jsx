import { forwardRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (label) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0"
            )}
        >
            <div className="flex gap-x-3 p-3">
                <img
                    src="https://seekvectors.com/storage/images/India%20Government-01.jpg"
                    alt="Government Logo"
                    className="dark:hidden h-15 w-20"
                />
                {!collapsed && (
                    <p className="text-lg font-medium text-slate-900 dark:text-slate-50 flex items-center">Government</p>
                )}
            </div>

            <div className="flex w-full flex-col gap-y-4 p-3 overflow-hidden">
                {navbarLinks.map((navbarLink) => (
                    <nav key={navbarLink.title} className={cn("sidebar-group", collapsed && "md:items-center")}>
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                        {navbarLink.links.map((link) => (
                            <div key={link.label} className="relative">
                                {link.hasSubmenu ? (
                                    <>
                                        <button
                                            className="sidebar-item flex justify-between items-center w-full"
                                            onClick={() => toggleSubmenu(link.label)}
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <link.icon size={22} className="flex-shrink-0" />
                                                {!collapsed && <p>{link.label}</p>}
                                            </div>
                                            {!collapsed && (
                                                <ChevronDown
                                                    size={18}
                                                    className={cn("transition-transform", openSubmenu === link.label ? "rotate-180" : "rotate-0")}
                                                />
                                            )}
                                        </button>
                                        <div
                                            className={cn(
                                                "pl-6 mt-2 transition-[max-height] duration-300 ease-in-out overflow-hidden",
                                                openSubmenu === link.label ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                            )}
                                        >
                                            {link.submenu.map((sub) => (
                                                <NavLink key={sub.label} to={sub.path} className="sidebar-item text-sm">
                                                    {sub.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink to={link.path} className={cn("sidebar-item", collapsed && "md:w-[45px]")}>
                                        <link.icon size={22} className="flex-shrink-0" />
                                        {!collapsed && <p>{link.label}</p>}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
