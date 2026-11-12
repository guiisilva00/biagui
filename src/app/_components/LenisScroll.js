"use client";

import { ReactLenis } from "lenis/react";

export default function LenisScroll({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
