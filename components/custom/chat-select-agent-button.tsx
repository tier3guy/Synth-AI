"use client";

import * as React from "react";
import { Cpu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Agent {
  id: string;
  name: string;
}

interface ChatSelectAgentButtonProps {
  agents: Agent[];
  selectedAgentId: string | null;
  onSelect: (agentId: string) => void;
}

export default function ChatSelectAgentButton({
  agents,
  selectedAgentId,
  onSelect,
}: ChatSelectAgentButtonProps) {
  const selectedAgent = agents.find((agent) => agent.id === selectedAgentId);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent">
        <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-3xl py-4">
          <Cpu className="w-4 h-4" />
          {selectedAgent ? selectedAgent.name : "Select Agent"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {agents.map((agent) => (
          <DropdownMenuItem
            key={agent.id}
            onClick={() => onSelect(agent.id)}
          >
            {agent.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
