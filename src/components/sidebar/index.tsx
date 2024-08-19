"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "../global/mode-toggle";
import { menuOptions } from "@/lib/constant";
import { Switch } from "@/components/ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar, showSidebar } from "@/store/menu/actions";
import { AlignJustify, SquarePen , Ellipsis  } from "lucide-react";
import { useRouter } from 'next/navigation';


type SidebarProps = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const Sidebar = ({ isVisible = true }: SidebarProps) => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const isSidebarVisible = useSelector(
    (state: any) => state.sidebar.isSidebarVisible
  );

  const toggleSidebar = () => {
    if (isSidebarVisible) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }
  };

  const newChat = () => {
    dispatch(hideSidebar());
    router.push('/chat'); 
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-4 h-screen z-50" />
      <nav
        className={clsx(
          "fixed w-64 md:block bg-Surface-Card h-screen overflow-none flex flex-col gap-10 py-6 px-4 transition-transform duration-300",
          {
            "-translate-x-full": !isVisible,
            "translate-x-0": isVisible,
          }
        )}
      >
        <div className="flex flex-col gap-8 h-screen justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 justify-between">
              <div className="flex flex-row gap-4 justify-end">
                <button onClick={toggleSidebar} className="menu-button">
                  <AlignJustify />
                </button>
              </div>
              <button onClick={newChat} className="menu-button">
                <SquarePen />
              </button>
            </div>

            <div className="flex flex-col gap-2 mt-10">
              <div className="text-Text-Secondary font-medium text-xs mb-1">hoy</div>
              <div className="relative text-Text-Secondary font-medium text-base cursor-pointer hover:text-Primary mb-2 px-4 py-2 rounded-md hover:bg-gray-800">
               Nuevo Chat
               <Ellipsis className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-bold opacity-0 hover:opacity-100 cursor-pointer"/>
              </div>
              <div className="relative text-Text-Secondary font-medium text-base cursor-pointer hover:text-Primary mb-2 px-4 py-2 rounded-md hover:bg-gray-800">
               Nuevo Chat
               <Ellipsis className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-bold opacity-0 hover:opacity-100 cursor-pointer"/>
              </div>
              <div className="relative text-Text-Secondary font-medium text-base cursor-pointer hover:text-Primary mb-2 px-4 py-2 rounded-md hover:bg-gray-800">
               Nuevo Chat
              <Ellipsis className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-bold opacity-0 hover:opacity-100 cursor-pointer"/>
              </div>

              <div className="text-Text-Secondary font-medium text-xs mb-1">ayer</div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-10">
            <div className="flex flex-row gap-4 items-center">
              <ModeToggle />
              <div className="text-sm text-Text-Secondary">Theme</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
