"use client";

import { Button } from "./Button";

export function PrintButton({ children }: { children: string }) {
  return (
    <Button type="button" onClick={() => window.print()}>
      {children}
    </Button>
  );
}
