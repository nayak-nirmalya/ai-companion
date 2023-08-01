import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
  src: string;
}

export default function BotAvatar({ src }: BotAvatarProps) {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
}
