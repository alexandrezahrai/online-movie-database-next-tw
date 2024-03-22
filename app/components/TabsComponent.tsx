import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

export default function TabsComponent() {
  return (
    <Tabs defaultValue="buy" className="w-[400px] text-[#C3C3C3]">
      <TabsList>
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="rent">Rent</TabsTrigger>
        <TabsTrigger value="stream">Stream</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">Buy movie here.</TabsContent>
      <TabsContent value="rent">Rent movie here.</TabsContent>
      <TabsContent value="stream">Stream movie here.</TabsContent>
    </Tabs>
  );
}
