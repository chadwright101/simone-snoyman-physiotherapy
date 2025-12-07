import Head from "next/head";

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
      <Head>
        <title>Simone Snoyman Physiotherapy - Plettenberg Bay</title>
        <meta
          name="description"
          content="I am inspired and motivated with a passion for helping people. Having a hearing impairment, myself and wearing bilateral hearing aids since the age of 3, I have a unique understanding on the challenges that people with disabilities face."
        />
        <meta
          name="keywords"
          content="physiotherapy, physio, plettenberg bay, plett, plett physio, plett physiotherapy, garden route"
        />
        <meta
          property="og:image"
          content="https://www.simonesnoymanphysiotherapy.co.za/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsimone-snoyman-physiotherapy-logo.549543b3.png&w=1920&q=75"
        />
        <meta property="og:title" content="Simone Snoyman Physiotherapy" />
        <meta
          property="og:url"
          content="https://www.simonesnoymanphysiotherapy.co.za"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I am inspired and motivated with a passion for helping people. Having a hearing impairment, myself and wearing bilateral hearing aids since the age of 3, I have a unique understanding on the challenges that people with disabilities face."
        />
        <meta property="og:site_name" content="Simone Snoyman Physiotherapy" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
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
          id="fees-testimonials"
          className="hidden desktop:block -translate-y-14"
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
  try {
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
      props: { HeadlessTestimonials: (data as any).posts.nodes },
      revalidate: 15,
    };
  } catch (error) {
    return {
      props: { HeadlessTestimonials: [] },
      revalidate: 5,
    };
  }
}
