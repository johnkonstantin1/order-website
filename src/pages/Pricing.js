import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "../components/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "white", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="/contacts" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>$10</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 developed projects</li>
                    <li>Fast work</li>
                    <li>100+ happiness clients</li>
                  </ul>

                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose this option
                  </Button>
                </div>
              </Link>
              <Link to="/contacts" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Starter</h3>
                  <h4>$10</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 developed projects</li>
                    <li>Fast work</li>
                    <li>100+ happiness clients</li>
                  </ul>

                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose this option
                  </Button>
                </div>
              </Link>
              <Link to="/contacts" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Starter</h3>
                  <h4>$10</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 developed projects</li>
                    <li>Fast work</li>
                    <li>100+ happiness clients</li>
                  </ul>

                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose this option
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
