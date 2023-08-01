"use client";

import React from "react";
import { Companion, Message } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[];
    _count: { messages: number };
  };
}

export default function ChatHeader({ companion }: ChatHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}
