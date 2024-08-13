"use client";
import React, { useState } from "react";
import Conversation from "./component/Conversation";
import ChatInput from "./component/ChatInput";
import { getShortDate } from "@/utils/DateUtils";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";

export interface Message {
  message: string | string[];
  received: boolean;
  time: string;
  type?: string;
}

const demoMessages: Message[] = [
  {
    message: "Hola, ¿cómo estás?",
    received: true,
    time: "12:00",
    type: "text",
  },
  {
    message: "Hola, envíame la información de ventas de este mes.",
    received: false,
    time: "12:01",
    type: "text",
  },
  {
    message: "Te envio la información que me pediste.",
    received: true,
    time: "12:00",
    type: "text",
  },
  {
    message: [
      "Con tu archivo de ventas 2023 listo, podrías hacer consultas como estas:",
      "Productos más vendidos. 📊",
      "Comparativa de ventas mensuales. 📈",
      "Días con mayores ventas. 🗓️",
      "Tasa de crecimiento trimestral. 📉",
      "Ventas totales por trimestre. 📆",
    ],
    received: true,
    time: "12:02",
    type: "list",
  },
  {
    message: "1,2,3,4,5,6,7,8,9,10",
    received: true,
    time: "12:03",
    type: "chart",
  },
  {
    message: "Para mas información visita:",
    received: true,
    time: "12:03",
    type: "text",
  },
  {
    message: "https://lucide.dev/icons/align-justify",
    received: true,
    time: "12:00",
    type: "link",
  },
  {
    message: "🗓️ Día con mayor  especialmente entre las 3 PM y las 6 PM.",
    received: true,
    time: "12:03",
    type: "text",
  },
  {
    message: "Cualquier duda me dices.",
    received: true,
    time: "12:03",
    type: "text",
  },
  {
    message: "He estado trabajando en un nuevo proyecto. ¿Y tú?",
    received: false,
    time: "12:03",
    type: "text",
  },
  {
    message: "He estado aprendiendo a programar en React.",
    received: true,
    time: "12:04",
    type: "text",
  },
  {
    message: "¡Qué bien! React es muy útil para el desarrollo web.",
    received: false,
    time: "12:05",
    type: "text",
  },
  {
    message: "Aquí tienes una lista de recursos que te pueden ayudar:",
    received: true,
    time: "12:08",
    type: "text",
  },
  {
    message: [
      "Componentes de React.",
      "Hooks de React.",
      "Context API.",
      "React Router.",
    ],
    received: true,
    time: "12:02",
    type: "list",
  },
  {
    message: "Te recomendaría practicar mucho y leer la documentación oficial.",
    received: false,
    time: "12:07",
    type: "text",
  },
  {
    message: "Gracias por el consejo. ¿Qué más has estado haciendo?",
    received: true,
    time: "12:08",
    type: "text",
  },
  {
    message:
      "He estado viendo algunas series en Netflix. ¿Tienes alguna recomendación?",
    received: false,
    time: "12:09",
    type: "text",
  },
  {
    message: "Sí, te recomiendo ver 'Stranger Things'. Es muy buena.",
    received: true,
    time: "12:10",
    type: "text",
  },
  {
    message: "¡Genial! La agregaré a mi lista. Gracias.",
    received: false,
    time: "12:11",
    type: "text",
  },
  {
    message: "De nada. ¿Qué más te gusta hacer en tu tiempo libre?",
    received: true,
    time: "12:12",
    type: "text",
  },
  {
    message: "Me gusta leer libros y salir a caminar.",
    received: false,
    time: "12:13",
    type: "text",
  },
];

const Chat = () => {
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>(
    "Mensaje..."
  );
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

  return (
    <div
    className={`flex flex-col overflow-x-hidden  h-full items-center p-4 bg-Surface-Light ${
      isSidebarVisible ? "md:ml-60" : ""
    }`}
  >
        <div className="flex flex-col justify-end h-full mt-20 mb-20 md:w-7/12">
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
