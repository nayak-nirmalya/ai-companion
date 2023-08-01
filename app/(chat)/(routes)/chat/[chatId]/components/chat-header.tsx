"use client";

import { Companion, Message } from "@prisma/client";
import React from "react";

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[];
    _count: { messages: number };
  };
}

export default function ChatHeader({ companion }: ChatHeaderProps) {
  return <div>ChatHeader</div>;
}
