import React from "react";

export default function ChatLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-4xl h-full w-full">{children}</div>;
}
