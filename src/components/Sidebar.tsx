'use client';

import { Bell, Cookie, CreditCard, Icon, Inbox, MessageSquare, Settings, User } from "lucide-react";
// import UserItem from "./UserItem";
import UserItem from "useritem";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import Link from "next/link";

export default function Sidebar() {
    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: '/',
                    Icon: <User size={16} />,
                    text: 'Profile',
                },
                {
                    link: '/',
                    Icon: <Inbox size={16} />,
                    text: 'Inbox',
                },
                {
                    link: '/',
                    Icon: <CreditCard size={16} />,
                    text: 'Billing',
                },
                {
                    link: '/',
                    Icon: <Bell size={16} />,
                    text: 'Notification Settings',
                },
            ]
        },
        {
            group: 'Setting',
            items: [
                {
                    link: '/',
                    Icon: <Settings size={16} />,
                    text: 'General Settings',
                },
                {
                    link: '/',
                    Icon: <Cookie size={16} />,
                    text: 'Privacy Settings',
                },
                {
                    link: '/',
                    Icon: <MessageSquare size={16} />,
                    text: 'Logs',
                },

            ]
        },
    ]


    return <div className="fixed flex flex-col w-[300px] min-w-[300px] p-4 min-h-screen">
        <div>
            <UserItem
                title="Jaimin Radadiya"
                description="rj45@gmail.com"
                shadow={false}
                backgroundColor="rgba(125,24,66,1)"
                style={{ border: '1px solid red' }}
            />
        </div>
        <div className="grow">
            <Command style={{ overflow: 'visible' }}>
                <CommandList style={{ overflow: 'visible' }}>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {
                        menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((options: any, optionsKey: number) =>
                                    <CommandItem key={optionsKey} className="flex gap-2 cursor-pointer">
                                        {options.Icon}
                                        {options.text}
                                    </CommandItem>)}
                            </CommandGroup>))}
                    <CommandSeparator />
                </CommandList>
            </Command>

        </div>
        <div className="">
            <Link href="/team" className="flex items-center gap-2">
                <Settings />
                <span>Team Settings</span>
            </Link>
        </div>
    </div>
}