"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div>
        {theme === "light" ? (
          <FiMoon
            className={styles.theme_icon}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <FiSun
            className={styles.theme_icon}
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </header>
  );
};
