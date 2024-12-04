"use client"
import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function ChartOverview() {
const chartData = [
  { marca: "Superframe", desktop: 1 },
  { marca: "Biostar", desktop: 0 },
  { marca: "Redragon", desktop: 0 },
  { marca: "Fifine", desktop: 0 },
  { marca: "AMD", desktop: 2 },
  { marca: "Intel", desktop: 0 },
  { marca: "Nvidia", desktop: 0 },
  { marca: "Galax", desktop: 0 },
];

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">Overview Avaliações</CardTitle>
          <DollarSign className="ml-auto h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis 
            dataKey={"marca"}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={value => value.slice(0, 10)}
            />
            <Bar dataKey={"desktop"} fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
