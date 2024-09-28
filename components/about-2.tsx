import Image from "next/image";

interface Props {
  cssClasses?: string;
}

const About2 = ({ cssClasses }: Props) => {
  return (
    <main className={`${cssClasses}`}>
      <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row items-center tablet:place-self-start">
        <Image
          src="/assets/graphics/medicine-bag.png"
          alt="Medicine bottle icon"
          className="h-20 tablet:h-[52px] tablet:-mt-12 w-auto"
          height={80}
          width={80}
        />
        <h2 className="text-heading uppercase font-bebas_neue text-center mb-10 tablet:text-left">
          Who am I?
        </h2>
      </div>
      <div className="grid gap-10 desktop:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p>
            I am inspired and motivated with a passion for helping people.
            Having a hearing impairment, myself and wearing bilateral hearing
            aids since the age of 3, I have a unique understanding on the
            challenges that people with disabilities face.
          </p>
          <p>
            I graduated from Wits University in Johannesburg in 2003 and did my
            community service at CMJAH (Charlotte Maxeke Johannesburg Academic
            Hospital). Here I gained extensive experience in a variety of
            conditions in both the hospital and outpatient setting. I returned
            to CMJAH in 2013 where I ran the outpatients department until I left
            after starting a family. I have been working in private practice
            since 2005 and started my own practice in 2007. I have locumed for
            various practices in Johannesburg within the hospital and the
            outpatient setting. In 2022 I relocated to the beautiful Plettenberg
            bay with my family.
          </p>
          <p>
            I have a passion towards continuing education and a drive to provide
            the best and most up to date care for people entrusted in my care. I
            have done many post graduate studies including the NMS (neuro
            musculoskeletal course) in 2019 and obtaining my MCMT (Master
            certification in Manual Therapy) from New York. I am currently
            working towards my certificate in Chronic Pain Management.
          </p>
          <p>
            My ultimate aim is helping my patients to achieve a pain free life
            in order to function at their optimal level.
          </p>
        </div>
        <div className="grid gap-8 tablet:grid-cols-2 desktop:grid-cols-1 desktop:place-content-start">
          <Image
            src="/assets/about-2/adult-male-starting-recovery-plan.jpg"
            alt=""
            className="h-72 object-cover phoneLarge:h-96 desktop:h-[335px] desktopLarge:h-[275px] object-left-top"
            height={400}
            width={585}
          />
          <Image
            src="/assets/about-2/back-view-dark-haired-bearded-geriatrician-auscultating-lungs-gray-haired-caucasian-patient.jpg"
            alt=""
            className="h-72 object-cover phoneLarge:h-96 desktop:h-[335px] desktopLarge:h-[275px]"
            height={400}
            width={585}
          />
        </div>
      </div>
    </main>
  );
};

export default About2;
