import { Header } from "@/components/header";
import { Body } from "@/components/body";
import styles from "./page.module.scss";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className={styles.main}>
      <Logo />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
