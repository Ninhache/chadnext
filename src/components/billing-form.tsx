"use client";

import { useState } from "react";
import Icons from "~/components/shared/icons";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { toast } from "~/components/ui/use-toast";
import { parseDateTime } from "~/lib/time";
import { cn } from "~/lib/utils";
import { useCurrentLocale, useScopedI18n } from "~/locales/client";
import { type UserSubscriptionPlan } from "~/types";
interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  subscriptionPlan: UserSubscriptionPlan & {
    isCanceled: boolean;
  };
}

export function BillingForm({
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const locale = useCurrentLocale();
  const scopedT = useScopedI18n("billing");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(!isLoading);

    // Get a Stripe session URL.
    const response = await fetch("/api/stripe");

    if (!response?.ok) {
      return toast({
        title: scopedT("error"),
        description: scopedT("tryAgain"),
        variant: "destructive",
      });
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    const session = await response.json();
    if (session) {
      window.location.href = session.url;
    }
  }

  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{scopedT("title")}</CardTitle>
          <CardDescription>
            <em>
              {scopedT("abstract", {
                name: <strong>{subscriptionPlan.name}</strong>,
              })}
            </em>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-medium ">
          {subscriptionPlan.description}
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {subscriptionPlan.isPro ? "Manage Subscription" : "Upgrade to PRO"}
          </Button>
          {subscriptionPlan.isPro ? (
            <p className="rounded-full text-xs font-medium md:self-end ">
              {subscriptionPlan.isCanceled
                ? scopedT("endPlan")
                : scopedT("renewPlan")}
              {parseDateTime(
                `${subscriptionPlan.stripeCurrentPeriodEnd}`,
                locale
              )}
              .
            </p>
          ) : null}
        </CardFooter>
      </Card>
    </form>
  );
}
