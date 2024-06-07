'use client';

import { Bell, Cookie, CreditCard, Icon, Inbox, MessageSquare, Settings, User } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";

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


    return <div className="fixed flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command style={{overflow: 'visible'}}>
                <CommandList style={{overflow: 'visible'}}>
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
        <div className="">Setting / Notifications</div>
    </div>
}