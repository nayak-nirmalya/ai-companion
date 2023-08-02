"use client";

import React from "react";
import { useTheme } from "next-themes";

import { useToast } from "@/components/ui/use-toast";

interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading?: boolean;
  src?: string;
}

export default function ChatMessage({
  role,
  content,
  isLoading,
  src
}: ChatMessageProps) {
  const { toast } = useToast();
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) return;

    navigator.clipboard.writeText(content);
    toast({ description: "Message Copied to Clipboard.", duration: 3000 });
  };

  return <div>ChatMessage</div>;
}
