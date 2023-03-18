import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Prosucts",
        path: "/products",
        icon: <AiIcons.AiOutlineAntDesign/>,
        cName: 'nav-text'
    },
    {
        title: "Contacts",
        path: "/contacts",
        icon: <AiIcons.AiOutlineContacts/>,
        cName: 'nav-text'
    },
    {
        title: "Blog",
        path: "/blogList",
        icon: <FaIcons.FaNewspaper/>,
        cName: 'nav-text'
    },
]

