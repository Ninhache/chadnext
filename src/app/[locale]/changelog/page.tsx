import { changes_en, changes_fr } from "content";

import { type Metadata } from "next";
import { siteConfig } from "~/config/site";
import { parseDateTime } from "~/lib/time";
import { getCurrentLocale, getScopedI18n } from "~/locales/server";

interface Change {
  title: string;
  date: string;
  content: string;
  locale: "en" | "fr";
}
function ChangeCard({ date, title, content, locale = "en" }: Change) {
  return (
    <article className="prose prose-slate mb-8 dark:prose-invert">
      <h2 className=" mb-0 text-3xl font-semibold tracking-tight transition-colors">
        {title}
      </h2>
      <time className=" text-sm text-muted-foreground" dateTime={date}>
        {parseDateTime(date, locale)}
      </time>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const metadata: Metadata = {
  title: "Changelog",
  description: "All the latest updates, improvements, and fixes.",
};

export default async function Changelog() {
  const scopedT = await getScopedI18n("about");
  const locale = getCurrentLocale();

  const changes = locale === "fr" ? changes_fr : changes_en;

  const posts = changes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container min-h-screen py-8">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {scopedT("title")}
      </h1>
      <p className="mb-10 mt-2.5 text-xl text-muted-foreground">
        {scopedT("abstract", {
          name: siteConfig().name,
        })}
      </p>
      <div className="space-y-10">
        {posts.map((change, idx) => (
          <ChangeCard key={idx} {...change} locale={locale} />
        ))}
      </div>
    </div>
  );
}
