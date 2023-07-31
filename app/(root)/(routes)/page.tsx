import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div>
      RootPage (Protected!)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
