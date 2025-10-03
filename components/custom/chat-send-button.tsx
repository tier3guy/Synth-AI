"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IChatSendButton {
    onSend: () => void;
}

export default function ChatSendButton({ onSend }: IChatSendButton) {
  return (
    <Button size="icon" variant="ghost" onClick={onSend} className="border rounded-full cursor-pointer">
      <Send className="h-4 w-4" />
      <span className="sr-only">Send message</span>
    </Button>
  );
}
