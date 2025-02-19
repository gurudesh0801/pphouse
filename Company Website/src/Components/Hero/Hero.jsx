import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css"; // Custom CSS

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Ensure opacity transition works correctly
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    // Slide-in title effect
    tl.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

    // Slide-in text effect
    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

    // Button scale effect
    tl.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Floating image effect
    gsap.to(imageRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="hero-title" ref={titleRef}>
              <span>Powering</span> Your Digital Future with
              <span className="text-gradient"> Project Powerhouse</span>
            </h1>

            <p className="hero-text" ref={textRef}>
              We craft cutting-edge digital experiences that drive success.
              Build your dream website or app with us!
            </p>

            <a href="#" className="hero-btn" ref={buttonRef}>
              Get Started <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="image-wrapper">
              <img
                ref={imageRef}
                src="https://res.cloudinary.com/dxpf6dhn1/image/upload/v1739986019/ProjectPowerhouse/tmf5y1sxcft6rgmkz2nu.svg"
                alt="Hero Section"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
