import StickyNav from "@/components/ui/sticky_nav";
import CardDesc from "@/components/ui/card_desc";
import Section from "@/components/ui/section_component";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Home() {

  return (
    <>
      <StickyNav/>
      <section className="columns-2 mr-auto ml-auto w-7xl mt-30">
        <section>
          <p className="text-6xl/20 font-bold text-left">
            THE FUTURE OF SUSTAINABLE INTELLIGENCE NETWORK
          </p>
          <p className="mt-2 font-normal text-sm">
            A pilot-ready climate accountability platform integrating leading CleanBC indicators, academic expertise, and standardized public-sector emissions reporting.
          </p>
          <Button className="rounded-full border mt-5 text-lg p-6">Let's Explore</Button>
        </section>
          <Image
            src = "/upward_chart.png"
            width={1000}
            height={1000}
            alt = "environment upward chart trend"
          />
      </section>
      <section className="columns-3 mr-auto ml-auto w-2/3 mt-50 shadow-xl">
        <CardDesc/>
      </section>
      <section id = "sectionContainer" className="mr-auto ml-auto mt-20 w-2/3">
        <Section/>
      </section>
  </>
  );
}
