import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Home() {
  const navBtns = ["About", "Platform", "Partners", "Implementation"]
  const cardInfo = [{
    header: "CleanBC Indicator Tracking",
    title: "Leading Progress Indicators",
    dsec: "Tracks CleanBC implementation using near-real-time leading indicators.",
    info_pts: ["EV adoption, heat pumps, retrofits","Benchmarked to 2030 & 2040 targets"],
    jump_pos: "A"
  },{
    header: "Academia Platform",
    title: "Academic Collaboration Layer",
    dsec: "Structured academic support for interpretation and policy evaluation.",
    info_pts :["Co-developed indicators with government","Independent trend interpretation"],
    jump_pos: "B"
  },
  {
    header: "GHG MRV",
    title: "Public-Sector MRV Platform",
    dsec: "Standardized MRV tools for audit-ready emissions reporting.",
    info_pts :["Carbon Neutral Government alignment","Optional managed MRV service"],
    jump_pos: "C"
  }]
  return (
    <>
      <NavigationMenu className="bg-gray-100 rounded-md rounded-full border sticky top-5 left-1/6 shadow-lg">
        <NavigationMenuList>
          <NavigationMenuItem className = "flex flex-row align-middle">
            <FontAwesomeIcon icon={faRecycle} className="w-7 m-2"/>
            <p className="text-md mt-auto mb-auto p-3 font-bold mr-100">Climate Change Intelligence Network</p>
          </NavigationMenuItem>
          {
            navBtns.map((item,key) => {
              return(
              <NavigationMenuItem key = {key + 3}>
                <h2 className="font-normal text-sm pl-5 pr-5 pt-2.5 pb-2.5 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md" key = {key + 3}>{item}</h2>
              </NavigationMenuItem>
              )
            })
          }
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-50 m-2">Contact Us</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

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
          {cardInfo.map((item,key) => {
            return(
              <Card key = {key + 1} className="h-75 shadow-xl">
                <CardHeader key={key + 4}>
                  <CardTitle key = {key + 5} className="rounded-full bg-gray-300"><p className="p-1 ml-2 text-sm uppercase font-bold">{item.header}</p></CardTitle>
                </CardHeader>
                <CardContent className="align-middle">
                  <h1 className="font-bold uppercase" key = {key + 10}>{item.title}</h1>
                  <p className="text-xs text-neutral-400 mt-2 mb-2" key = {key + 20}>{item.dsec}</p>
                  <ul className="list-disc marker:text-gray-300 ml-6" key = {key + 50}>
                    {item.info_pts.map((list_item,info_key) => {
                      return(
                        <li key = {info_key + 6}>
                          {list_item}
                        </li>
                      )
                    })}
                  </ul>
                  <Button className="bg-gray-200 text-black-500 m-5 text-lg"><p className="p-5">Learn More</p></Button>
                </CardContent>
              </Card>
            )
          })}
      </section>
      {/**TODO Clean up this dumb hardcoded stuff */}

      <section id = "sectionContainer" className="mr-auto ml-auto mt-20 w-2/3">
        <section id = "A" className="flex flex-row">
          <section id = "content_body" className="w-2/4">
            <section id = "header" className="font-bold uppercase flex flex-col">
                <p className="w-15 bg-gray-200 rounded-full text-sm text-center p-2">SIDE A</p>
                <p className="text-3xl">CleanBC Indicator Tracking Dashboard</p>
            </section>
            <section id = "desc">
              <p>A leading-indicator layer that complements emissions inventories by showing whether implementation is on track—before outcomes are reported years later.</p>
            </section>
          </section>
          <section id = "proposal_body" className="w-1/3">
            <Card>
              <CardHeader>
                <CardTitle><p className="font-bold">What it does</p></CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Aggregates CleanBC-aligned indicators (e.g., electrification, building retrofits, grid carbon intensity) and benchmarks progress against required trajectories for 2030 and 2040 targets.
                </p>
                <hr className="mt-5 mb-5"></hr>
                <p className="font-bold">What it outputs</p>
                <ul className="list-disc pl-5">
                  <li>On-track / at-risk status by indicator and sector</li>
                  <li>Trajectory comparison (actual vs required pathway)</li>
                  <li>Clear documentation of assumptions and data sources</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </section>
      </section>
  </>
  );
}
