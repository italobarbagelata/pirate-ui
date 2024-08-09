import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface Props {
  disabled: boolean;
  placeholder: string;
  onSend: (message: string) => void;
}

const ChatInput = ({ placeholder, disabled, onSend }: Props) => {
  const textareaRef = useRef<HTMLInputElement>(null);

  const detectEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const message = textareaRef.current && textareaRef.current.value;
    if (message) {
      onSend(message);
      textareaRef.current.value = '';
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
      <Input
        autoFocus
        onKeyDown={detectEnterPress}
        disabled={disabled}
        placeholder={placeholder}
        ref={textareaRef}
        data-testid="chat-input"
        rounded='full'
      />
      <button
        data-testid="chat-button"
        className=" rounded-xl p-4"
        onClick={handleSubmit}
        disabled={disabled}
      >
        <Send className="text-Text-Secondary" />
      </button>
    </div>
  );
};

export default ChatInput;
