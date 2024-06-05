"use client";

import React from "react";
import Icons from "./shared/icons";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { useScopedI18n } from "~/locales/client";

export default function CopyButton({ content }: { content: string }) {
  const scopedT = useScopedI18n("copy");

  const copyToClipboard = (content: string) => {
    if (!navigator.clipboard) {
      toast({
        title: scopedT("error"),
        description: scopedT("tryAgain"),
        variant: "destructive",
      });
    }
    navigator.clipboard.writeText(content);
    toast({
      title: scopedT("success"),
    });
  };

  return (
    <Button
      type="button"
      className="absolute right-0 top-0 h-full "
      size="icon"
      variant="ghost"
      onClick={() => copyToClipboard(content)}
    >
      <span className="sr-only">{scopedT("label")}</span>
      <Icons.copy className="h-3 w-3" />
    </Button>
  );
}
