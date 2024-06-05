import { type Project } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import DeleteCard from "./delete-card";
import EditableDetails from "./editable-details";
import { getScopedI18n } from "~/locales/server";

export default async function TabSections({ project }: { project: Project }) {
  const scopedT = await getScopedI18n("projects");

  return (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">{scopedT("tabs.details")}</TabsTrigger>
        <TabsTrigger value="settings">{scopedT("tabs.settings")}</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <EditableDetails initialValues={project} />
      </TabsContent>
      <TabsContent value="settings">
        <DeleteCard id={project.id} />
      </TabsContent>
    </Tabs>
  );
}
