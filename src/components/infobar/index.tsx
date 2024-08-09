"use client";
import React, { useEffect, useState } from "react";
import { AlignJustify, Book, Headphones, Search } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar, showSidebar } from "@/store/menu/actions";

const InfoBar = () => {
  const dispatch = useDispatch();
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

  return (
    <div className="info-bar fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row justify-between gap-6 items-center px-4 py-4 w-full bg-Surface-Light dark:bg-black text-Text-Default">
        <button onClick={toggleSidebar} className="menu-button">
          <AlignJustify />
        </button>
        <Link className="flex font-bold flex-row md:hide" href="/">
          DAB
        </Link>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Sidebar isVisible={isSidebarVisible} setIsVisible={toggleSidebar} />
    </div>
  );
};

export default InfoBar;
