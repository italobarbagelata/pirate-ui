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

type SidebarProps = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const Sidebar = ({ isVisible, setIsVisible }: SidebarProps) => {
  const pathName = usePathname();
  const [autoHide, setAutoHide] = useState(true);


  const handleMouseEnter = () => {
    if (autoHide) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (autoHide) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-screen z-50"
        onMouseEnter={handleMouseEnter}
      />
      <nav
        className={clsx(
          "fixed md:block bg-Surface-Light dark:bg-black h-screen overflow-none flex items-center flex-col gap-10 py-6 px-2 transition-transform duration-300",
          {
            "-translate-x-full": !isVisible,
            "translate-x-0": isVisible,
          }
        )}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center flex-col gap-8">
          <TooltipProvider>
            {menuOptions.map((menuItem) => (
              <ul key={menuItem.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <li>
                      <Link
                        href={menuItem.href}
                        className={clsx(
                          "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                          {
                            "dark:bg-[#2F006B] bg-[#EEE0FF] ":
                              pathName === menuItem.href,
                          }
                        )}
                      >
                        <menuItem.Component
                          selected={pathName === menuItem.href}
                        />
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-black/10 backdrop-blur-xl"
                  >
                    <p>{menuItem.name}</p>
                  </TooltipContent>
                </Tooltip>
              </ul>
            ))}
          </TooltipProvider>
          <Separator />
        </div>
        <div className="mt-8">
          <ModeToggle />
        </div>
        <div className="mt-4">
          <label className="flex items-center gap-2">
            <Switch checked={autoHide} onCheckedChange={setAutoHide} />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;