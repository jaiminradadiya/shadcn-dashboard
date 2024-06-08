'use client';

import { ResponsiveTimeRange } from "@nivo/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MyResponsiveTimeRange = (props: any) => {
    return ( <ResponsiveTimeRange
        data={props.data}
        from="2023-01-01"
        to="2023-12-12"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
    />
    )
}

export default function Calendar() {

    function generateDataForYear2023() {
        const data = [];
        const startingDate = new Date("2023-01-01");
        const endingDate = new Date("2023-12-31");

        while (startingDate <= endingDate) {
            const value = Math.floor(Math.random() * 301);

            data.push({
                "value": value,
                "day": startingDate.toISOString().slice(0, 10)
            });

            startingDate.setDate(startingDate.getDate() + 1);
        }
        return data;
    }
    const dateArray = generateDataForYear2023();
    return <div>
        <Card>
            <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>There are the numbers of this year.</CardDescription>
            </CardHeader>
            <CardContent className="h-[100px] flex items-center w-full">
                <MyResponsiveTimeRange data={dateArray} />
            </CardContent>
        </Card>
    </div>;
}