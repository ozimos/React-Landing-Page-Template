import React from "react";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Features from "../components/features";
import About from "../components/about";
import Services from "../components/services";
import Gallery from "../components/gallery";
import Testimonials from "../components/testimonials";
import Team from "../components/Team";
import Contact from "../components/contact";
import JsonData from "../data/data.json";

export default function App(props) {
  return (
    <div>
      <Navigation />
      <Header data={props.Header} />
      <Features data={props.Features} />
      <About data={props.About} />
      <Services data={props.Services} />
      <Gallery />
      <Testimonials data={props.Testimonials} />
      <Team data={props.Team} />
      <Contact data={props.Contact} />
    </div>
  );
}

export function getStaticProps() {
  return {props: JsonData};
}
