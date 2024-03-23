"use client";
import AuthPage from "@/layouts/AuthPage/AuthPage";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <Suspense>
      <AuthPage id={id} />
    </Suspense>
  );
}
