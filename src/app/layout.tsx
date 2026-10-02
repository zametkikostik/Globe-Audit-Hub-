import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Globe Audit Hub — Professional Accounting & Audit",
  description:
    "International accounting and audit services. Russia, Europe, USA, CIS, Asia. AI 24/7, reporting, DAI payments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
