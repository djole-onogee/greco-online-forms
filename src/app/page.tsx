"use client";
import AuthPage from "@/layouts/AuthPage/AuthPage";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Auth = dynamic(() => import("@/layouts/AuthPage/AuthPage"), {
  ssr: false,
});
export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return <Auth id={id} />;
}
