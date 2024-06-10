'use client';

import dynamic from "next/dynamic";
import { useState } from "react";


const UserItem = dynamic(() => import("useritem"), { ssr: false });

type Member = {
    email: string;
    full_name: string;
    backgroundColor: string;
    role: string;
}
export default function TeamSettings() {
    const [members, setMembers] = useState<Member[]>([
        {
            email: 'demo1@gmail.com',
            full_name: 'Demo User 1',
            backgroundColor: "rgba(125,24,66,1)",
            role: 'Admin',
        },
        {
            email: 'demo2@gmail.com',
            full_name: 'Demo User 2',
            backgroundColor: "rgba(15,24,66,1)",
            role: 'Admin 2',
        },
        {
            email: 'demo3@gmail.com',
            full_name: 'Demo User 3',
            backgroundColor: "rgba(1,93,26,1)",
            role: 'Admin 3',
        },
        {
            email: 'demo4@gmail.com',
            full_name: 'Demo User 4',
            backgroundColor: "rgba(98,0,166,1)",
            role: 'Admin 4',
        }
    ]);
    return (
        <div className="grid gap-4">
            <header>
                <h2 className="text-[36px] font-[700]">
                    Team Settings</h2>
            </header>
            <div>
                <div className="border rounded">
                    {members.map((member: Member, key: number) => <div key={key}>
                        <UserItem
                            backgroundColor={member.backgroundColor}
                            title={member.full_name}
                            description={member.role}
                            email={member.email}
                            shadow={false}
                            border={false}
                        />
                    </div>)}
                </div>
            </div>
        </div>
    );
}