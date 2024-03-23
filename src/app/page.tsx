"use client";
import AuthPage from "@/layouts/AuthPage/AuthPage";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return <AuthPage id={id} />;
}
