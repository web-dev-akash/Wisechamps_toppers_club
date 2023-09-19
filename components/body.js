"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/body.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Body = () => {
  const { theme } = useTheme();
  return (
    <main>
      {/* -----------------------------Section One Start--------------------------- */}
      <section className={styles.section}>
        <div className={styles.left_section}>
          <h1>Brilliance breeds in the right company</h1>
          <p>
            Join Toppers Club to give your bright one the company she derserves.
          </p>
          <p>
            <Link href="#" className={styles.primary_btn}>
              Apply for Membership
            </Link>
          </p>
        </div>
        <div className={styles.image_div}>
          <Image src={"/child.jpg"} alt="child" width={500} height={700} />
        </div>
      </section>

      {/* -----------------------------Section One End--------------------------- */}

      {/* -----------------------------Section Two Start--------------------------- */}

      <h1 className={styles.section_heading}>Section 2</h1>
      <section className={styles.section}>
        <div className={styles.left_section}>Left Section</div>
        <div className={styles.right_section}>Right Section</div>
      </section>

      {/* -----------------------------Section Two End--------------------------- */}

      {/* -----------------------------Section Three Start--------------------------- */}

      <h1 className={styles.section_heading}>Section 3</h1>
      <section className={styles.section}>
        <div className={styles.left_section}>Left Section</div>
        <div className={styles.right_section}>Right Section</div>
      </section>

      {/* -----------------------------Section Three End--------------------------- */}
    </main>
  );
};
