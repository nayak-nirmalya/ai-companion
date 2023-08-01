"use client";

import React from "react";
import { Companion, Message } from "@prisma/client";
import ChatHeader from "./chat-header";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

export default function ChatClient({ companion }: ChatClientProps) {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
}
