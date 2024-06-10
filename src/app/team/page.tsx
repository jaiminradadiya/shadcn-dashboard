'use client';

import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Badge } from "@/components/ui/badge"



const UserItem = dynamic(() => import("useritem"), { ssr: false });

type Member = {
    email: string;
    full_name: string;
    backgroundColor: string;
    role: string;
    status?: string;
}
export default function TeamSettings() {
    const [members, setMembers] = useState<Member[]>([
        {
            email: 'demo1@gmail.com',
            full_name: 'Demo User 1',
            backgroundColor: "rgba(125,24,66,1)",
            role: 'admin',
        },
        {
            email: 'demo2@gmail.com',
            full_name: 'Demo User 2',
            backgroundColor: "rgba(15,24,66,1)",
            role: 'admin',
        },
        {
            email: 'demo3@gmail.com',
            full_name: 'Demo User 3',
            backgroundColor: "rgba(1,93,26,1)",
            role: 'viewer',
            status: 'active',
        },
        {
            email: 'demo4@gmail.com',
            full_name: 'Demo User 4',
            backgroundColor: "rgba(98,0,166,1)",
            role: 'admin 4',
            status: 'pending',
        }
    ]);
    return (
        <div className="grid gap-4">
            <header>
                <h2 className="text-[36px] font-[700]">
                    Team Settings</h2>
            </header>
            <div className="grid gap-4">
                <div>
                    <div className="flex items-center justify-between gap-2">
                        <Command className="rounded-lg border shadow-md">
                            <CommandInput placeholder="Type an email to invite...." />
                        </Command>

                        <Button variant="secondary">Add a new Member</Button>
                    </div>
                </div>
                <div className="border rounded">
                    {members && members.length === 0 && <div className="p-4 text-center">No members found.</div>}
                    {members && members.map((member: Member, key: number) =>
                        <div className="grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-2" key={key} >
                            <div className="col-span-2">
                                <UserItem
                                    backgroundColor={member.backgroundColor}
                                    title={member.full_name}
                                    description={member.email}
                                    shadow={false}
                                    border={false}
                                />
                            </div>
                            <div className="col-span-3 flex gap-2">
                                <Badge className={`tag capitalize ${member.role}`}>{member.role}</Badge>
                                {member.status && <Badge className={`tag capitalize ${member.status}`}>{member.status}</Badge>}
                            </div>
                            <div className="col-span-1 flex justify-end">
                                <Button variant="ghost">Remove</Button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}