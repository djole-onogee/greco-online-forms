"use client";
import AuthPage from "@/layouts/AuthPage/AuthPage";

import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <AuthPage />
    </Suspense>
  );
}
