"use client";
import styles from "../styles/header.module.scss";
import Image from "next/image";
import "animate.css";
export const Logo = () => {
  return (
    <div className={`${styles.logo} animate__animated animate__fadeIn`}>
      <Image src={"/logo.png"} alt="Wisechamps" width={160} height={40} />
    </div>
  );
};
