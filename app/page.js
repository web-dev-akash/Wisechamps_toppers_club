import { Header } from "@/components/header";
import { Body } from "@/components/body";
import styles from "./page.module.scss";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
