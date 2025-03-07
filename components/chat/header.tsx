import { Button } from "@/components/ui/button";
import { EraserIcon, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";
import { useTheme } from "@/theme";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {

  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-gray-900 shadow-[0_10px_15px_-3px_rgba(30,30,30,1)] dark:shadow-[0_10px_15px_-3px_rgba(30,30,30,1)]">
      <div className="flex w-full">
        <div className="flex-0 w-[100px]">
        </div>
        <div className="flex-1 flex justify-center items-center gap-2 text-foreground">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center">
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}