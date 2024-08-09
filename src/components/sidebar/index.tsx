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
          "fixed w-64 md:block bg-Surface-Light dark:bg-black h-screen overflow-none flex flex-col gap-10 py-6 px-2 transition-transform duration-300",
          {
            "-translate-x-full": !isVisible,
            "translate-x-0": isVisible,
          }
        )}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col gap-8 h-screen">
          <div className="flex justify-center flex-col gap-8">
            {menuOptions.map((menuItem) => (
              <ul key={menuItem.name}>
                <li className="flex items-center gap-2">
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
                    <menuItem.Component selected={pathName === menuItem.href} />
                  </Link>
                  <div className="text-sm text-Text-Secondary ml-2">
                    {menuItem.name}
                  </div>
                </li>
              </ul>
            ))}
            <Separator />
          </div>

          <div className="flex flex-col gap-8  bottom-0">
            <div className="flex flex-row gap-4 items-center">
              <ModeToggle />
              <div className="text-sm text-Text-Secondary">Theme</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <label>
                <Switch checked={autoHide} onCheckedChange={setAutoHide} />
              </label>
              <div className="text-sm text-Text-Secondary">Auto hide</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
