import React from "react";

import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

export default async function CompanionIdPage({
  params
}: CompanionIdPageProps) {
  // TODO: check subscripton

  const companion = await prismadb.companion.findUnique({
    where: { id: params.companionId }
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
}
