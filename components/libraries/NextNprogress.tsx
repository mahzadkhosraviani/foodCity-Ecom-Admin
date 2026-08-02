"use client";

import { ProgressProvider } from "@bprogress/next/app";

export default function NextBprogress({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider
      height="4px"
      color="#ffbe30"
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
