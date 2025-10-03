"use client";

import { useState } from "react";
import ChatSendButton from "./chat-send-button";
import { Textarea } from "@/components/ui/textarea";
import ChatAttachButton from "./chat-attach-button";
import ChatSelectAgentButton from "./chat-select-agent-button";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  const Agents = [
    { id: "agent-1", name: "Chat GPT - o4" },
    { id: "agent-2", name: "DeepSeek" },
    { id: "agent-3", name: "Gemini" },
    { id: "agent-4", name: "Claude Sonnet" },
  ];

  const OnSend = () => {
    try {
      // Call the Open Router API
    } catch (error) {
      console.error(error);
    }
  }

  const OnFileAttach = (file: File) => {
    console.log("Attached: ", file);
  }

  return (
    <div
      className={`flex flex-col gap-2 rounded-md border border-ring p-3 shadow-xl transition-all bg-background ${
        isFocused && "border-ring ring-[4px] ring-ring/50"}`}
    >
      <Textarea
        autoFocus
        value={message}
        placeholder="Ask Anything ..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setMessage(e.target.value)}
        className="border-none focus-visible:ring-0 focus-visible:border-none resize-none h-24 outline-none dark:bg-transparent p-1"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <ChatAttachButton onAttach={OnFileAttach} />
          <ChatSelectAgentButton
            agents={Agents}
            selectedAgentId={selectedAgentId}
            onSelect={(agentId) => setSelectedAgentId(agentId)}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <ChatSendButton onSend={OnSend}/>
        </div>
      </div>
    </div>
  );
}
