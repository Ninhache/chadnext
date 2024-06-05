import Link from "next/link";
import { getUserSubscriptionPlan } from "~/lib/subscription";
import { cn } from "~/lib/utils";
import { validateRequest } from "~/server/auth";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getScopedI18n } from "~/locales/server";

export default async function Pricing() {
  const scopedT = await getScopedI18n("pricing");

  const { user } = await validateRequest();
  const subscription = user ? await getUserSubscriptionPlan(user.id) : null;

  return (
    <section>
      <div className="container space-y-6 py-14 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-4xl md:text-6xl">
            {scopedT("title")}
          </h2>
          <p className="max-w-[85%] text-balance leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {scopedT("abstract")}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          <Card
            className={cn(
              "relative w-full transition duration-200 ease-in-out hover:shadow-lg xl:w-[300px]"
            )}
          >
            <CardHeader>
              <CardTitle>
                {scopedT("free")}
                {subscription && !subscription?.isPro && (
                  <Badge className=" absolute right-0 top-0 m-4">
                    {scopedT("current")}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{scopedT("freeDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="my-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-primary">
                  $0
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  /{scopedT("month")}
                </span>
              </p>
            </CardContent>
            <CardFooter className=" justify-center">
              {!subscription ? (
                <Link href="/login" className={buttonVariants()}>
                  {scopedT("getStarted")}
                </Link>
              ) : (
                ""
              )}
            </CardFooter>
          </Card>
          <Card
            className={cn(
              "relative w-full transition duration-200 ease-in-out hover:shadow-lg xl:w-[300px]"
            )}
          >
            <CardHeader>
              <CardTitle>
                {scopedT("pro")}{" "}
                {subscription && subscription?.isPro && (
                  <Badge className=" absolute right-0 top-0 m-4">
                    {scopedT("current")}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{scopedT("proDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="my-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-primary">
                  $10
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  /{scopedT("month")}
                </span>
              </p>
            </CardContent>
            <CardFooter className=" justify-center">
              <Link href="/login" className={buttonVariants()}>
                {!subscription
                  ? scopedT("getStarted")
                  : subscription?.isPro
                    ? scopedT("managePlan")
                    : scopedT("upgradePlan")}
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
