"use client";
import React, { useState } from "react";
import { getShortDate } from "@/utils/DateUtils";
import "react-perfect-scrollbar/dist/css/styles.css";
import Conversation from "../demo-chat/component/Conversation";
import ChatInput from "../demo-chat/component/ChatInput";
import { Card } from "@/components/ui/card";
import UploadCard from "../demo-chat/component/UploadCard";
import { BotMessageSquare } from "lucide-react";
import { useSelector } from "react-redux";

export interface Message {
  message: string | string[];
  received: boolean;
  time: string;
  type?: string;
}

const demoMessages: Message[] = [];

const Chat = () => {
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("Mensaje...");
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const isSidebarVisible = useSelector(
    (state: any) => state.sidebar.isSidebarVisible
  );

  const sendMessages = (message: string) => {
    if (!message) return;

    setDisabledInput(true);
    setPlaceholder("Mensaje...");

    const newMessage = { message, received: false, time: getShortDate() };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name);
    }
  };

  return (
    <div
      className={`flex flex-col overflow-x-hidden  h-full items-center p-4 bg-Surface-Light ${
        isSidebarVisible ? "md:ml-60" : ""
      }`}
    >
      <div className="flex flex-col justify-end h-full mt-20 mb-20 md:w-7/12">
        <div className="flex flex-col gap-8">
          <div className="text-Text-Default">
            ¡Bienvenido al asistente de chat! 🎉
          </div>
          <div className="text-Text-Default">
            Para comenzar, por favor sube un archivo. Puedes arrastrar y soltar
            el archivo en el área indicada o hacer clic para seleccionarlo desde
            tu dispositivo. Una vez cargado, estaremos listos para ayudarte con
            lo que necesites. ¡Esperamos que tengas una excelente experiencia!
          </div>
          <div className="flex flex-col items-center gap-4">
            <BotMessageSquare size={64} />
            <UploadCard />
          </div>
        </div>

        <Conversation messages={messages} />
      </div>
      <div className="bg-Surface-Light fixed bottom-0 md:w-7/12 w-full h-20">
        <ChatInput
          disabled={disabledInput}
          placeholder={placeholder}
          onSend={sendMessages}
        />
      </div>
    </div>
  );
};

export default Chat;
