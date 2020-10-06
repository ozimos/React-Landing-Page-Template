import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Footer from "../components/Footer";
import JsonData from "../data/data.json";

export default function App(props) {
  return (
    <div>
      <Navigation />
      <Header data={props.Header} />
      <Features data={props.Features} />
      <About data={props.About} />
      <Services data={props.Services} />
      <Testimonials data={props.Testimonials} />
      <Team data={props.Team} />
      <Contact data={props.Contact} />
      <Social data={props.Social} />
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  return { props: JsonData };
}
