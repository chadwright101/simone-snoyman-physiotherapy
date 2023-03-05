import About1 from "@/components/about-1";
import About2 from "@/components/about-2";
import Conditions from "@/components/conditions";
import Contact from "@/components/contact";
import Fees from "@/components/fees";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Testimonials from "@/components/testimonials";
import Treatments from "@/components/treatments";

export default function Home() {
  return (
    <div className="bg-beige">
      <Header />
      <Hero />
      <Layout>
        <About1 cssClasses="mt-10" />
        <div className="desktop:flex flex-wrap">
          <Conditions cssClasses="my-24" />
          <Fees cssClasses="desktop:hidden" />
          <Treatments cssClasses="my-24" />
          <About2 />
        </div>
        <div className="tablet:grid grid-cols-1 desktop:grid-cols-2 gap-8 my-24">
          <Fees cssClasses="hidden desktop:flex flex-col" />
          <Testimonials />
        </div>
      </Layout>
      <Contact cssClasses="mb-20" />
      <Layout>
        <Footer cssClasses="pb-8 tablet:pb-6 desktop:pb-4" />
      </Layout>
    </div>
  );
}
