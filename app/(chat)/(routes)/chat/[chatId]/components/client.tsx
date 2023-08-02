"use client";

import React, { FormEvent, useState } from "react";
import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCompletion } from "ai/react";

import ChatHeader from "@/components/chat-header";
import ChatForm from "@/components/chat-form";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

export default function ChatClient({ companion }: ChatClientProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>(companion.messages);

  const { input, isLoading, handleInputChange, handleSubmit, setInput } =
    useCompletion({
      api: `/api/chat/${companion.id}`,
      onFinish(prompt, completion) {
        const systemMessage = {
          role: "system",
          content: completion
        };

        setMessages((current) => [...current, systemMessage]);
        setInput("");

        router.refresh();
      }
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  };

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      <div>Messaegs TODO</div>
      <ChatForm
        handleInputChange={handleInputChange}
        input={input}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
