"use client";
import { useTransition } from "react";
import Icons from "~/components/shared/icons";
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
import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import { toast } from "~/components/ui/use-toast";
import { deleteProjectById } from "../action";
import { useScopedI18n } from "~/locales/client";

export default function DeleteCard({ id }: { id: string }) {
  const scopedT = useScopedI18n("projects");
  const [pending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() =>
      deleteProjectById(id)
        .then(() => {
          toast({
            title: scopedT("delete.success"),
          });
        })
        .catch((error) => {
          console.error(error);
          toast({
            title: scopedT("delete.error.unknown"),
            description: scopedT("delete.tryAgain"),
            variant: "destructive",
          });
        })
    );
  };
  return (
    <Card className="mt-5 flex items-center justify-between p-6">
      <div>
        <CardTitle className=" mb-2.5">{scopedT("delete.label")}</CardTitle>
        <CardDescription>
          {scopedT("delete.confirmationDescription")}
        </CardDescription>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">{scopedT("delete.label")}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {scopedT("delete.confirmationQuestion")}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{scopedT("delete.cancel")}</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive" onClick={handleDelete}>
                {pending && (
                  <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                )}
                {scopedT("delete.delete")}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
