import Link from "next/link";
import { siteConfig } from "~/config/site";
import { getScopedI18n } from "~/locales/server";

export default async function OpenSource() {
  const scopedT = await getScopedI18n("openSource");
  return (
    <section className="">
      <div className="container pb-14 lg:pb-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {scopedT("title")}
          </h2>
          <p className="max-w-[85%] text-balance leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {scopedT("abstract", {
              name: siteConfig().name,
            })}
          </p>
          <Link
            className="underline underline-offset-4"
            href={siteConfig().links.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-semibold">{scopedT("starMe")}</span>, Onii
            Chan {`>_<`}
          </Link>
        </div>
      </div>
    </section>
  );
}
