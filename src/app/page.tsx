import General from "@/components/Cards/General";
import Calendar from "@/components/Cards/Calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { DataTableDemo } from "@/components/Cards/DataTable";

export default function Home() {
  return <div className="grid gap-[32px]">
    <div className="grid grid-cols-2 gap-[32px]">
      <General />
      <div className="grid gap-[32px]">
        <Calendar />
        <Calendar />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-[32px] h-[300px] overflow-hidden">
      <Lines />
      <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>There are the orders of this month.</CardDescription>
          </CardHeader>
          <div className="px-4">
            <TableDemo />
          </div>
        </Card>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>There are the users of this month.</CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableDemo />
          </div>
        </Card>
    </div>
  </div>
}
