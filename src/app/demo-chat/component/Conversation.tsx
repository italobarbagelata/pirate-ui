import React, { useEffect, useRef } from "react";
import { Message } from "../page";
import Bubble from "./Bubble";

interface Props {
  messages: Message[];
}

const Conversation = ({ messages }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="flex flex-col w-full h-full overflow-y-auto"
      data-testid="chat-conversation"
    >
      {messages.map((msg, index) => (
        <Bubble
          key={index}
          received={msg.received}
          message={msg.message}
          time={msg.time}
          type={
            msg.type === "text" ||
            msg.type === "list" ||
            msg.type === "chart" ||
            msg.type === "link"
              ? msg.type
              : "text"
          }
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Conversation;
