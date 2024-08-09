import React from "react";
import { Message } from "../page";
import Bubble from "./Bubble";

interface Props {
  messages: Message[];
}

const Conversation = ({ messages }: Props) => {
  return (
    <div
      className="flex flex-col w-full h-full"
      data-testid="chat-conversation"
    >
      {messages.map((msg, index) => (
        <Bubble
          key={index}
          received={msg.received}
          message={msg.message}
          time={msg.time}
          type={msg.type === "text" || msg.type === "list" ||  msg.type === "chart"  ||  msg.type === "link" ? msg.type : "text"}
        />
      ))}
    </div>
  );
};

export default Conversation;
