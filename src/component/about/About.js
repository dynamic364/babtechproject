import { Link } from "react-router-dom";
import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import "./about.css";

const Component = () => (
  <main className="about-page">
    <section className="about-hero">
      <p className="about-eyebrow">ABOUT DJ BEAT</p>
      <h2>Good music makes great moments.</h2>
      <p>
        DJ Beat is an event music concept focused on helping people celebrate
        with DJ performances, sound equipment, and optional lighting.
      </p>
      <Link className="about-button" to="/contact">
        Get in touch
      </Link>
    </section>

    <section className="about-details">
      <article className="about-card">
        <h3>What we do</h3>
        <p>
          We bring music and event entertainment together, with package options
          for different occasions and needs.
        </p>
      </article>

      <article className="about-card">
        <h3>Our approach</h3>
        <p>
          We want planning to feel simple: compare the available packages, ask
          questions, and discuss the details of your event.
        </p>
      </article>

      <article className="about-card">
        <h3>Our goal</h3>
        <p>
          Help create a lively atmosphere where guests can enjoy the music and
          celebrate together.
        </p>
      </article>
    </section>
  </main>
);

const About = pageWithNav(Component);

export default About;