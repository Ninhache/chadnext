"use client";

import { LogOutIcon } from "lucide-react";
import { useScopedI18n } from "~/locales/client";
import { logout } from "~/server/auth";
import { Button } from "../ui/button";

export default function LogoutButton({ className }: { className?: string }) {
  const scopedT = useScopedI18n("login");

  return (
    <form action={logout} className={className}>
      <Button type="submit" variant="destructive">
        <LogOutIcon className="mr-2 h-4 w-4" />
        <span>{scopedT("logout")}</span>
      </Button>
    </form>
  );
}
