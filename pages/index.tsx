import About1 from "@/components/about-1";
import About2 from "@/components/about-2";
import Conditions from "@/components/conditions";
import Fees from "@/components/fees";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Treatments from "@/components/treatments";

export default function Home() {
  return (
    <div className="bg-beige">
      <Header />
      <Hero />
      <Layout>
        <About1 cssClasses="mt-12" />
        <div className="desktop:flex flex-wrap">
          <Conditions cssClasses="my-32" />
          <Fees cssClasses="desktop:hidden" />
          <Treatments cssClasses="my-32" />
          <About2 />
        </div>
      </Layout>
    </div>
  );
}
