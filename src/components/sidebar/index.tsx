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
import { AlignJustify, SquarePen, Ellipsis, Trash2, Pencil, DatabaseZap } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";


type SidebarProps = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const Sidebar = ({ isVisible = true }: SidebarProps) => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const [chatName, setChatName] = useState<string>('Nuevo Chat');
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState('');
  
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

  const handleEditName = () => {
    setIsEditingName(true);
    setNewName(chatName);
  };

  const handleSaveName = () => {
    if (newName.trim() !== '') {
      setChatName(newName);
    }
    setIsEditingName(false);
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
              <div className="flex flex-row justify-between items-center text-Text-Secondary font-medium text-base cursor-pointer hover:text-Primary mb-2 px-4 py-2 rounded-md hover:bg-gray-800 group">
                Nuevo Chat
                <Popover>
                  <PopoverTrigger>
                    <Ellipsis className="opacity-0 group-hover:opacity-100 cursor-pointer w-6 h-6" />
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="p-4 bg-gray-900 text-white rounded-2xl shadow-md border-none"
                    style={{
                      marginRight: '-100rem',
                    }}
                  >
                    {isEditingName ? (
                      <div className="flex flex-col space-y-2">
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          className="bg-gray-800 text-white p-2 rounded-md"
                        />
                        <button
                          onClick={handleSaveName}
                          className="bg-blue-500 text-white p-2 rounded-md"
                        >
                          Guardar
                        </button>
                      </div>
                    ) : (
                      <>
                        <div
                          className="flex justify-between items-center space-x-2 py-2 hover:bg-gray-800 rounded-md cursor-pointer"
                          onClick={handleEditName}
                        >
                          <span>Cambiar nombre</span>
                          <Pencil className="w-5 h-5 text-white" />
                        </div>
                        <hr className="border-t border-gray-700 opacity-50 my-2" />
                        <div className="flex justify-between items-center space-x-2 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
                          <span>Fuente de datos</span>
                          <DatabaseZap className="w-5 h-5 text-white" />
                        </div>
                        <hr className="border-t border-gray-700 opacity-50 my-2" />
                        <div className="flex justify-between items-center space-x-2 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
                          <span className="text-red-400">Eliminar</span>
                          <Trash2 className="w-5 h-5 text-red-400" />
                        </div>
                      </>
                    )}
                  </PopoverContent>
                </Popover>
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
