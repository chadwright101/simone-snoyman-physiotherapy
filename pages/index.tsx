import About1 from "@/components/about-1";
import About2 from "@/components/about-2";
import Conditions from "@/components/conditions";
import Contact from "@/components/contact";
import Fees from "@/components/fees";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Treatments from "@/components/treatments";
import Testimonials from "@/components/testimonials";

import client from "../components/utils/client";

import { gql } from "@apollo/client";

import "@splidejs/react-splide/css";

interface Props {
  cssClasses?: string;
  HeadlessTestimonials?: [
    {
      testimonials: {
        name: string;
        location: string;
        testimonial: string;
      };
      id: string;
    }
  ];
}

export default function Home({ HeadlessTestimonials }: Props) {
  return (
    <div className="bg-beige">
      <Header />
      <Hero />
      <Layout>
        <div id="about" className="-translate-y-36"></div>
        <About1 cssClasses="mt-10" />
        <div className="desktop:grid grid-cols-[1fr_500px] desktopLarge:grid-cols-2 gap-x-10 w-full">
          <div>
            <div
              id="treatments"
              className="-translate-y-32 desktop:-translate-y-20"
            ></div>
            <Conditions cssClasses="my-24" />
          </div>
          <div>
            <div id="fees" className="desktop:hidden -translate-y-32"></div>
            <Fees cssClasses="desktop:hidden" />
          </div>
          <Treatments cssClasses="my-24 desktop:col-start-2 desktop:row-start-1" />
        </div>
        <div>
          <div id="your-physio" className="-translate-y-32"></div>
          <About2 />
        </div>
        <div
          id="fees"
          className="hidden desktop:block desktop:-translate-y-14"
        ></div>
        <div className="tablet:grid grid-cols-1 desktop:grid-cols-2 gap-8 my-24">
          <Fees cssClasses="hidden desktop:flex flex-col" />
          <Testimonials Testimonials={HeadlessTestimonials} />
        </div>
      </Layout>
      <div id="contact" className="-translate-y-32"></div>
      <Contact cssClasses="mb-20" />
      <Layout>
        <Footer cssClasses="pb-8 tablet:pb-6 desktop:pb-4" />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Testimonials {
        posts {
          nodes {
            testimonials {
              location
              name
              testimonial
            }
            id
          }
        }
      }
    `,
  });

  return {
    props: { HeadlessTestimonials: data.posts.nodes },
    revalidate: 15,
  };
}
