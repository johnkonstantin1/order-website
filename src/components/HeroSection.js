import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  showButton,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home_hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home_hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                {showButton && ( // использовать showButton для условного рендеринга кнопки
                  <Link to="/products">
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="col">
              <div className="home_hero-img-wrapper">
                <img src={img} alt={alt} className="home_hero-img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
