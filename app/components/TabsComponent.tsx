import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { capitalizeFirstLetter } from "../lib/utils";

export default function TabsComponent() {
  const tabs = [
    {
      value: "buy",
      label: "Buy",
    },
    {
      value: "rent",
      label: "Rent",
    },
    {
      value: "stream",
      label: "Stream",
    },
  ];

  return (
    <Tabs defaultValue="buy" className="w-[400px] text-[#C3C3C3]">
      <TabsList className="relative">
        {/* <div className="absolute inset-0 -z-10 bg-blue-700/30 blur-2xl filter"></div> */}
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {capitalizeFirstLetter(tab.label)}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="buy">Buy movie here.</TabsContent>
      <TabsContent value="rent">Rent movie here.</TabsContent>
      <TabsContent value="stream">Stream movie here.</TabsContent>
    </Tabs>
  );
}
