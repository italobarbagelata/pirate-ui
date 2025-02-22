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
import axios from "axios"; // Importar axios para hacer solicitudes HTTP

export interface Message {
  message: string | string[];
  received: boolean;
  time: string;
  type?: string;
}

const Chat = () => {
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("Mensaje...");
  const [messages, setMessages] = useState<Message[]>([]);
  const isSidebarVisible = useSelector(
    (state: any) => state.sidebar.isSidebarVisible
  );

  const sendMessages = async (message: string) => {
    if (!message) return;
  
    setDisabledInput(true);
    setPlaceholder("Enviando...");
  
    const newMessage = { message, received: false, time: getShortDate() };
    setMessages((prev) => [...prev, newMessage]);
  
    try {
      const response = await axios.post("http://localhost:8000/chat", { message });
      const botMessage = response.data; // Asumimos que la respuesta ya tiene el formato correcto
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setDisabledInput(false);
      setPlaceholder("Mensaje...");
    }
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
            Para comenzar, escribe un mensaje en el cuadro de texto.
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