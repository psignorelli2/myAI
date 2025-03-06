"use client";

import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Pass only clearMessages to ChatHeader */}
      <ChatHeader clearMessages={clearMessages} />  
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </div>
  );
}