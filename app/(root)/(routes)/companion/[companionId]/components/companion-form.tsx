"use client";

import React from "react";
import { Category, Companion } from "@prisma/client";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

export default function CompanionForm({
  initialData,
  categories
}: CompanionFormProps) {
  return <div>CompanionForm</div>;
}
