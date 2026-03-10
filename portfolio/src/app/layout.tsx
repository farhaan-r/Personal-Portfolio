import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Farhaan Rashid — CS & Mathematics",
  description:
    "Computer Science & Mathematics student passionate about machine learning, computer vision, and backend systems.",
  openGraph: {
    title: "Farhaan Rashid",
    description: "CS & Mathematics student | Machine Learning | Backend Systems",
    url: "https://farhaanrashid.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
