"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useScopedI18n } from "~/locales/client";
import Icons from "../shared/icons";
import LogoutButton from "../shared/logout-button";

const navItems = [
  {
    title: "projects",
    href: "/dashboard/projects",
    icon: Icons.projectPlus,
  },
  {
    title: "billing",
    href: "/dashboard/billing",
    icon: Icons.billing,
  },
  {
    title: "settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
] as const;

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const scopedT = useScopedI18n("navBar");
  const isActive = (href: string) => pathname === href;
  return (
    <nav
      className={cn("flex h-full gap-x-2 lg:flex-col lg:gap-y-1.5", className)}
      {...props}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            isActive(item.href)
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {<item.icon className="mr-2 h-4 w-4 " />} {scopedT(`${item.title}`)}
        </Link>
      ))}

      <LogoutButton className="mt-auto hidden lg:block" />
    </nav>
  );
}
