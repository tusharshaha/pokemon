import BlogSection from "@/components/Home/BlogSection";
import HeroSection from "@/components/Home/HeroSection";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Pokemon | Home">
      <HeroSection styles={styles} />
      <BlogSection styles={styles} />
    </Layout>
  )
}
