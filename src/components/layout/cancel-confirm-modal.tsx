"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { useScopedI18n } from "~/locales/client";

interface CancelConfirmModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  reset: () => void;
  isDisabled: boolean;
}

export default function CancelConfirmModal({
  show,
  setShow,
  reset,
  isDisabled,
}: CancelConfirmModalProps) {
  const scopedT = useScopedI18n("confirmModal");

  return (
    <AlertDialog open={show} onOpenChange={setShow}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" type="reset" disabled={isDisabled}>
          {scopedT("cancel")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{scopedT("ignore")}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={reset}>
            {scopedT("yes")}
          </AlertDialogCancel>
          <AlertDialogAction>{scopedT("no")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
