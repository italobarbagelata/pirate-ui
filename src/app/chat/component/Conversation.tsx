import React from "react";
import { Message } from "../page";

interface Props {
  messages: Message[];
}

const Conversation = ({ messages }: Props) => {
  const getRowClasses = (received: boolean) => {
    return received ? "flex justify-start" : "flex justify-end";
  };

  const getClasses = (received: boolean) =>
    received
      ? "bg-Surface-ChatBubbleReceive text-Text-ChatBubbleReceive received"
      : "bg-Surface-ChatBubbleSend text-Text-ChatBubbleSend sent";

  const bubbleClass = "rounded-md p-2 max-w-[60%] flex flex-col relative";

  return (
    <div
      className="flex flex-col w-full gap-4 h-full"
      data-testid="chat-conversation"
    >
      {messages.map(({ received, message, time }: Message) => (
        <div
          className={getRowClasses(received)}
          key={time}
          data-testid={`chat-message-${received ? "received" : "sent"}`}
        >
          <div className={`${getClasses(received)} ${bubbleClass}`} key={time}>
            <div className="min-w-[100px] text-sm font-medium">{message}</div>
            <div className="text-end text-xs">{time}</div>
            {received ? (
              <div className="absolute left-[-10px] top-[10px] w-0 h-0 border-t-0 border-r-[10px] border-b-[10px] border-l-0 border-transparent border-r-Surface-ChatBubbleReceive"></div>
            ) : (
              <div className="absolute right-[-10px] top-[10px] w-0 h-0 border-t-[10px] border-l-[10px] border-b-0 border-r-0 border-transparent border-l-Surface-ChatBubbleSend"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
