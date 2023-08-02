"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { ChatRequestOptions } from "ai";

interface ChatFormProps {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
  isLoading: boolean;
}

export default function ChatForm({
  handleInputChange,
  input,
  isLoading,
  onSubmit
}: ChatFormProps) {
  return <div>ChatForm</div>;
}
