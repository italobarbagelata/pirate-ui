import React from "react";
import TextMessage from "./TextMessage";
import ListMessage from "./ListMessage";
import { ChartContainer } from "@/components/ui/chart";
import { ChartCustom } from "./Chart";
import LinkMessage from "./LinkMessage";

interface BubbleClassProps {
  received: boolean;
  message: string | string[];
  time: string;
  type: 'text' | 'list' | 'chart' | 'link';
}

const getRowClasses = (received: boolean) => {
  return received ? "flex justify-start" : "flex justify-end";
};

const getClasses = (received: boolean) =>
  received
    ? "bg-transparent text-Text-ChatBubbleReceive received w-full"
    : "max-w-[60%] my-4 bg-Surface-ChatBubbleSend text-Text-ChatBubbleSend sent";

const bubbleClass = "rounded-md p-2 flex flex-col relative";

const Bubble: React.FC<BubbleClassProps> = ({ received, message, time, type }) => {
    return (
      <div
        className={getRowClasses(received)}
        data-testid={`chat-message-${received ? "received" : "sent"}`}
      >
        <div className={`${getClasses(received)} ${bubbleClass}`} key={time}>
          <div className="text-sm font-medium">
            {type === 'text' && (
              <TextMessage message={Array.isArray(message) ? message.join(' ') : message} />
            )}
            {type === 'list' && (
              <ListMessage items={Array.isArray(message) ? message : [message]} />
            )}
            {type === 'chart' && <div className="ml-4"><ChartCustom  /></div>}
            {type === 'link' && (
            <div className="ml-4">
              <LinkMessage link={Array.isArray(message) ? message.join(' ') : message} />
            </div>
          )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Bubble;

