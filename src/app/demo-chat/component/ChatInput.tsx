import { Input } from "@/components/ui/input";
import { CircleArrowUp, Send } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface Props {
  disabled: boolean;
  placeholder: string;
  onSend: (message: string) => void;
}

const ChatInput = ({ placeholder, disabled, onSend }: Props) => {
  const textareaRef = useRef<HTMLInputElement>(null);

  const detectEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const message = textareaRef.current && textareaRef.current.value;
    if (message) {
      onSend(message);
      textareaRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!disabled && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [disabled]);

  return (
    <div
      data-testid="chat-input-group"
      className="px-4 flex flex-row items-center"
    >
      <div className="relative w-full">
        <Input
          autoFocus
          onKeyDown={detectEnterPress}
          disabled={disabled}
          placeholder={placeholder}
          ref={textareaRef}
          data-testid="chat-input"
          className="pl-10 h-12"
          rounded="full"
        />
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleSubmit}
        >
          <CircleArrowUp className="text-Text-Secondary" />
        </span>
      </div>
    </div>
  );
};

export default ChatInput;
