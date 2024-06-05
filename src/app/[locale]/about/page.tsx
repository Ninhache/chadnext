import { abouts_en, abouts_fr } from "content";
import { type Metadata } from "next";
import { siteConfig } from "~/config/site";

import { getCurrentLocale, getScopedI18n } from "~/locales/server";

interface About {
  title: string;
  content: string;
}
function AboutCard({ title, content }: About) {
  return (
    <article className="prose prose-slate mb-8 dark:prose-invert">
      <h2 className="mb-0 text-3xl font-semibold tracking-tight transition-colors ">
        {title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: `Learn about the tech stack and inspiration behind ${siteConfig().name}.`,
};

export default async function About() {
  const scopedT = await getScopedI18n("about");
  const locale = getCurrentLocale();

  const abouts = locale === "fr" ? abouts_fr : abouts_en;

  return (
    <div className="container min-h-screen py-8">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {scopedT("title")}
      </h1>
      <p className="mb-10 mt-2.5 text-xl text-muted-foreground">
        {scopedT("abstract", { name: <strong>{siteConfig().name}</strong> })}
      </p>
      <div className="space-y-10">
        {abouts.map((p, i) => (
          <AboutCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
