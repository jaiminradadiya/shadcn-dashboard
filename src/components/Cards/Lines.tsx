'use client';
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data }: any) => {
    return (
        <ResponsiveLine
            data={data}
            // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            xFormat=" >-"
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}

        />
    )
}

export default function Lines() {
    const data = [
        {
            id: 'japan',
            color: 'hsl(351, 70%, 50%)',
            data: [
                { x: 'plane', y: 16 },
                { x: 'helicopter', y: 140 },
                { x: 'boat', y: 111 },
                { x: 'train', y: 21 },
                { x: 'subway', y: 47 },
                { x: 'bus', y: 218 },
                { x: 'car', y: 54 },
                { x: 'moto', y: 205 },
                { x: 'bicycle', y: 140 },
                { x: 'horse', y: 97 },
                { x: 'skateboard', y: 38 },
                { x: 'others', y: 208 },
            ],
        },
        {
            id: 'france',
            color: 'hsl(318, 70%, 50%)',
            data: [
                { x: 'plane', y: 152 },
                { x: 'helicopter', y: 154 },
                { x: 'boat', y: 110 },
                { x: 'train', y: 236 },
                { x: 'subway', y: 54 },
                { x: 'bus', y: 238 },
                { x: 'car', y: 289 },
                { x: 'moto', y: 7 },
                { x: 'bicycle', y: 4 },
                { x: 'horse', y: 207 },
                { x: 'skateboard', y: 158 },
                { x: 'others', y: 194 },
            ],
        },
        {
            id: 'us',
            color: 'hsl(245, 70%, 50%)',
            data: [
                { x: 'plane', y: 12 },
                { x: 'helicopter', y: 197 },
                { x: 'boat', y: 27 },
                { x: 'train', y: 297 },
                { x: 'subway', y: 272 },
                { x: 'bus', y: 82 },
                { x: 'car', y: 190 },
                { x: 'moto', y: 155 },
                { x: 'bicycle', y: 130 },
                { x: 'horse', y: 6 },
                { x: 'skateboard', y: 145 },
                { x: 'others', y: 251 },
            ],
        },
        {
            id: 'germany',
            color: 'hsl(104, 70%, 50%)',
            data: [
                { x: 'plane', y: 267 },
                { x: 'helicopter', y: 272 },
                { x: 'boat', y: 127 },
                { x: 'train', y: 52 },
                { x: 'subway', y: 199 },
                { x: 'bus', y: 97 },
                { x: 'car', y: 208 },
                { x: 'moto', y: 92 },
                { x: 'bicycle', y: 221 },
                { x: 'horse', y: 157 },
                { x: 'skateboard', y: 24 },
                { x: 'others', y: 209 },
            ],
        },
        {
            id: 'norway',
            color: 'hsl(52, 70%, 50%)',
            data: [
                { x: 'plane', y: 2 },
                { x: 'helicopter', y: 131 },
                { x: 'boat', y: 216 },
                { x: 'train', y: 71 },
                { x: 'subway', y: 150 },
                { x: 'bus', y: 95 },
                { x: 'car', y: 24 },
                { x: 'moto', y: 33 },
                { x: 'bicycle', y: 123 },
                { x: 'horse', y: 125 },
                { x: 'skateboard', y: 150 },
                { x: 'others', y: 190 },
            ],
        },
    ];
    return <Card className="w-full">
        <CardHeader>
            <CardTitle>Lines</CardTitle>
            <CardDescription>There are the stats of this year.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 h-[264px]">
            <MyResponsiveLine data={data} />
        </CardContent>
    </Card>;
}