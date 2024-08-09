"use client";
import React, { useEffect, useState } from "react";
import {
  AlignJustify,
  Book,
  Brain,
  Headphones,
  Search,
  SquareUserRound,
} from "lucide-react";

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
        <div className="flex flex-row gap-4 items-center">
          <Link className="flex font-bold flex-row md:hide" href="/">
            DAB.AI
          </Link>
          <Brain />
        </div>
        <SquareUserRound />
      </div>
      <Sidebar isVisible={isSidebarVisible} setIsVisible={toggleSidebar} />
    </div>
  );
};

export default InfoBar;
