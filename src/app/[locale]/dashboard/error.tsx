"use client";

import { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { useScopedI18n } from "~/locales/client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const scopedT = useScopedI18n("error");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-160px)] w-full flex-col items-center justify-center gap-y-4">
      <h2 className=" text-5xl font-bold text-destructive">
        {scopedT("source")}
      </h2>
      <Button onClick={() => reset()}>{scopedT("retry")}</Button>
    </div>
  );
}
