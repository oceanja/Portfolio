import  { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile!",
        "My Name is Ocean Jayant.",
        "I'm Web Developer.",
        "I'm a Tech Enthusiast.",
        "I'm an Explorer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef} className="typed-text"></h1>
  
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn"
            style={{ backgroundColor: "#66FCF1", color: "#000", border:"3px solid blue",marginTop: "12px" }}
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/hero/oc.jpg`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
  };
  
  export default Home;
  