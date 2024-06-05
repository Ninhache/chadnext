"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import AuthForm from "./auth-form";
import { useScopedI18n } from "~/locales/client";

export default function LoginModal() {
  const router = useRouter();
  const pathname = usePathname();
  const scopedT = useScopedI18n("login");

  const IsOpen = pathname.includes("/login");

  return (
    <Dialog open={IsOpen} onOpenChange={() => router.push("/")}>
      <DialogContent className="w-full max-w-[400px] rounded-md">
        <DialogHeader>
          <DialogTitle>
            <h2 className=" font-semibold tracking-tight transition-colors">
              {scopedT("welcomeBack")}
            </h2>
          </DialogTitle>
        </DialogHeader>
        <AuthForm />
      </DialogContent>
    </Dialog>
  );
}
