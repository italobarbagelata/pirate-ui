import React from "react";

interface TextMessageProps {
  message: string;
}

const TextMessage: React.FC<TextMessageProps> = ({ message }) => {
  return (
    <div className="min-w-[100px] text-sm font-medium">
      <p dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, "<br>") }} />
    </div>
  );
};

export default TextMessage;
