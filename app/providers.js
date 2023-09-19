"use client";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }) => {
  return (
    <ThemeProvider disableTransitionOnChange={true}>{children}</ThemeProvider>
  );
};
