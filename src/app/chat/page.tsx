"use client";
import React, { useState } from "react";
import Conversation from "./component/Conversation";
import ChatInput from "./component/ChatInput";
import { getShortDate } from "@/utils/DateUtils";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";

export interface Message {
  message: string;
  received: boolean;
  time: string;
}

const demoMessages: Message[] = [
  {
    message: "Hola, ¿cómo estás?",
    received: true,
    time: "12:00",
  },
  {
    message: "Hola, estoy bien, ¿y tú?",
    received: false,
    time: "12:01",
  },
  {
    message: "Con tu archivo de ventas 2023 listo, podrías hacer consultas como estas: Productos más vendidos. 📊 Comparativa de ventas mensuales. 📈 Días con mayores ventas. 🗓️ Tasa de crecimiento trimestral. 📉 Ventas totales por trimestre. 📆 Productos con mayor margen de beneficio. 🛍️ Productos con menor rotación. 🔄 Ventas por categoría. 🎯 Ventas por región. 📌 Informe de ventas diarias. 📅 ¡Explora libremente! Pregunta lo que quieras, como quieras. Estoy aquí para ayudarte a sacar el máximo provecho de tus datos.",
    received: true,
    time: "12:02",
  },
  {
    message: "He estado trabajando en un nuevo proyecto. ¿Y tú?",
    received: false,
    time: "12:03",
  },
  {
    message: "He estado aprendiendo a programar en React.",
    received: true,
    time: "12:04",
  },
  {
    message: "¡Qué bien! React es muy útil para el desarrollo web.",
    received: false,
    time: "12:05",
  },
  {
    message: "Sí, me está gustando mucho. ¿Tienes algún consejo?",
    received: true,
    time: "12:06",
  },
  {
    message: "Te recomendaría practicar mucho y leer la documentación oficial.",
    received: false,
    time: "12:07",
  },
  {
    message: "Gracias por el consejo. ¿Qué más has estado haciendo?",
    received: true,
    time: "12:08",
  },
  {
    message:
      "He estado viendo algunas series en Netflix. ¿Tienes alguna recomendación?",
    received: false,
    time: "12:09",
  },
  {
    message: "Sí, te recomiendo ver 'Stranger Things'. Es muy buena.",
    received: true,
    time: "12:10",
  },
  {
    message: "¡Genial! La agregaré a mi lista. Gracias.",
    received: false,
    time: "12:11",
  },
  {
    message: "De nada. ¿Qué más te gusta hacer en tu tiempo libre?",
    received: true,
    time: "12:12",
  },
  {
    message: "Me gusta leer libros y salir a caminar.",
    received: false,
    time: "12:13",
  },
  {
    message:
      "¡Qué bien! A mí también me gusta leer. ¿Qué libro estás leyendo ahora?",
    received: true,
    time: "12:14",
  },
  {
    message: "Estoy leyendo 'Cien años de soledad' de Gabriel García Márquez.",
    received: false,
    time: "12:15",
  },
  {
    message: "Es un libro excelente. Disfrútalo.",
    received: true,
    time: "12:16",
  },
];

const Chat = () => {
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>(
    "Enviar un mensaje..."
  );
  const [messages, setMessages] = useState<Message[]>(demoMessages);

  const isSidebarVisible = useSelector(
    (state: any) => state.sidebar.isSidebarVisible
  );

  const sendMessages = (message: string) => {
    if (!message) return;

    setDisabledInput(true);
    setPlaceholder("Espera un momento...");

    const newMessage = { message, received: false, time: getShortDate() };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div
      className={`${
        isSidebarVisible ? "ml-16 w-auto" : ""
      } transition-all duration-300`}
    >
      <div className="h-full flex flex-col overflow-hidden">
        <div className="flex h-full mt-16">
          <div className="flex flex-col relative z-10 w-full ">
            <PerfectScrollbar>
              <div className="grow flex" id="chat-scroll">
                <div className="flex-1 relative overflow-hidden py-4 px-4 pb-16 flex justify-start w-full rounded-lg">
                  <Conversation messages={messages} />
                </div>
              </div>
            </PerfectScrollbar>
            <div
              className={`fixed left-0 right-0 ${
                isSidebarVisible ? "ml-16 w-auto" : ""
              } transition-all duration-300 mx-auto bottom-0 bg-Surface-Light border-t border-Border-Card`}
            >
              <ChatInput
                disabled={disabledInput}
                placeholder={placeholder}
                onSend={sendMessages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
