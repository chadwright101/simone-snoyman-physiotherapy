import About1 from "@/components/about-1";
import Button, { ButtonVariant } from "@/components/button";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <div className="bg-beige">
      <Header />
      <Hero />
      <Layout>
        <About1 />
      </Layout>
    </div>
  );
}
