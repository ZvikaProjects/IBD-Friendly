import React from "react";
import "./About.css"
// import Navbar from "../components/NavBar";

const About = () => {
  const textStyle = {
    fontWeight: "bold", // Make the text bolder
    fontSize: "1.2em", // Make the text bigger
    background:"white", //Make the text with a white backgroud
    display: 'inline-block' //The backgroud will fit the size of the text
  };

  return (
    <div className="img">
      <div>
      </div>
      <h1>About Our IBD Food Compass</h1>
      <p className="text-display">
        Welcome to IBD Food Compass, your trusted companion on your journey to
        managing Inflammatory Bowel Disease (IBD) through thoughtful nutrition.
        Our mission is to empower IBD patients like you with personalized food
        solutions.
      </p><br/><br/>

      <h2 className="text-underLine">Our Features:</h2><br/>
      <div className="feature">
        <h3 className="text-display">AI Recipe Generator:</h3>
        <p className="text-display">
          Our AI-powered recipe generator is designed to make meal planning
          easier. Simply provide the ingredients you have, and it will create
          delicious and IBD-friendly recipes tailored to your dietary needs.
        </p>
      </div><br/>

      <div className="feature">
        <h3 className="text-display">Personalized Food Recommendations:</h3>
        <p className="text-display">
          We understand that IBD is unique to each individual. Our advanced
          model analyzes your medical condition and offers personalized food
          recommendations to help you make informed choices for your health and
          well-being.
        </p>
      </div><br/>

      <h2 className="text-display">Our Commitment:</h2>
      <p className="text-display">
        At IBD Food Compass, we are committed to supporting you in your journey
        toward a healthier and more enjoyable life with IBD. We believe that
        nutritious and delicious food can be part of your treatment plan, and we
        are here to guide you every step of the way.
      </p>

      <p className="text-display">
        Whether you're newly diagnosed or have been managing IBD for years, our
        website is a valuable resource for finding IBD-friendly recipes, dietary
        tips, and community support. We are dedicated to helping you thrive
        while managing your condition.
      </p><br/><br/>

      <h2 className="text-underLine">Contact Us:</h2><br/>
      <p className="text-display">
        Your feedback and questions are important to us. Please feel free to
        reach out to our team at{" "}
        <a href="mailto:contact@ibdfoodcompass.com">
          contact@ibdfoodcompass.com
        </a>{" "}
        with any inquiries or suggestions. We're here to assist you on your IBD
        journey.
      </p>
    </div>
  );
};

export default About;
