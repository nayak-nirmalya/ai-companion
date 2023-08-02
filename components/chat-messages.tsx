"use client";

import React from "react";
import { Companion } from "@prisma/client";

import ChatMessage from "@/components/chat-message";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
  companion: Companion;
}

export default function ChatMessages({
  companion,
  isLoading,
  messages
}: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        src={companion.src}
        role="system"
        content={`Hello, I'm ${companion.name}, ${companion.description}.`}
      />
    </div>
  );
}
