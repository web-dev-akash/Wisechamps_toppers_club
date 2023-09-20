"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/body.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import "animate.css";
export const Body = () => {
  const { theme } = useTheme();
  return (
    <main>
      {/* -----------------------------Section One Start--------------------------- */}
      <section className={styles.section}>
        <div
          className={`${styles.left_section} animate__animated animate__fadeInLeft`}
        >
          <h1>Brilliance breeds in the right company</h1>
          <p
            className={theme === "light" ? styles.para_light : styles.para_dark}
          >
            Join Topprs Club to give your bright one the company she derserves.
          </p>
          <p>
            <Link href="#" className={styles.primary_btn}>
              Apply for Membership
            </Link>
          </p>
        </div>
        <div className={styles.parent_image_div}>
          <div
            className={`${styles.image_div} animate__animated animate__fadeInRight`}
          >
            <Image
              className={styles[`image_${theme}`]}
              src={"/child.jpg"}
              alt="child"
              width={500}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* -----------------------------Section One End--------------------------- */}

      {/* -----------------------------Section Two Start--------------------------- */}
      <section className={styles.section}>
        <div className={styles.image_div_2}>
          <Image
            className={styles[`image_${theme}`]}
            src={"/wordcloud.jpg"}
            alt="wordcloud"
            width={300}
            height={400}
          />
        </div>
        <div className={styles.left_section}>
          <p className={styles.section_2_p}>THE CURSE OF BRILLIANCE</p>
          <h2 className={styles.section_2_h2}>
            Being bright is a gift and a <span>problem!</span>
          </h2>
          <p
            className={`${styles.section_2_p} ${
              theme === "light" ? styles.para_light : styles.para_dark
            }`}
          >
            Classrooms are a mix of children of differing ability, and teachers
            always pace themselves to the speed of the slowest child.
          </p>
          <p
            className={`${styles.section_2_p} ${
              theme === "light" ? styles.para_light : styles.para_dark
            }`}
          >
            No wonder our bright kids are often bored & overconfident, and
            seldom challenged to their full potential.
          </p>
          <p>
            <Link href="#" className={styles.primary_btn}>
              Engage them Better
            </Link>
          </p>
        </div>
      </section>

      {/* -----------------------------Section Two End--------------------------- */}

      {/* -----------------------------Section Three Start--------------------------- */}

      <section className={styles.section_3}>
        <div>
          <p className={styles.section_2_p}>INTRODUCING TOPPRS CLUB</p>
          <h2 className={styles.section_2_h2}>
            A place for your <span>Bright one!</span>
          </h2>
        </div>
        <div className={styles.section_3_grid}>
          <div>
            <Image src={"/1.png"} alt="logo" width={70} height={70} />
            <div>
              <h3>Challenges them</h3>
              <p
                className={
                  theme === "light" ? styles.para_light : styles.para_dark
                }
              >
                Your child competes with other smart ones, solving problems
                unseen in the average classroom
              </p>
            </div>
          </div>
          <div>
            <Image src={"/2.png"} alt="logo" width={70} height={70} />
            <div>
              <h3>Upskills them</h3>
              <p
                className={
                  theme === "light" ? styles.para_light : styles.para_dark
                }
              >
                Your child learns complex problem solving by engaging with
                exceptional peers and expert teachers
              </p>
            </div>
          </div>
          <div>
            <Image src={"/3.png"} alt="logo" width={70} height={70} />
            <div>
              <h3>Benchmarks them</h3>
              <p
                className={
                  theme === "light" ? styles.para_light : styles.para_dark
                }
              >
                Helps you and your child understand how well they match up in a
                community of bright students
              </p>
            </div>
          </div>
          <div>
            <Image src={"/4.png"} alt="logo" width={70} height={70} />
            <div>
              <h3>Inspires them</h3>
              <p
                className={
                  theme === "light" ? styles.para_light : styles.para_dark
                }
              >
                Regular meet-ups with other exceptional individuals provides
                valuable guidance to your child, helping shape their future
              </p>
            </div>
          </div>
        </div>
        <p>
          <Link href="#" className={styles.primary_btn}>
            Apply for Membership
          </Link>
        </p>
      </section>

      {/* -----------------------------Section Three End--------------------------- */}
    </main>
  );
};
