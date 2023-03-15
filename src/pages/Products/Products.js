import React from "react";
import "./Products.css";
function Products() {
  return (
    <>
      <h1 className="main-article">
        Here we present to you some of our recent works:
      </h1 >
      <p className="main-article">We are fast growing up team with a big ambitions, who want to become a main part of modeling industry.</p>
      <section className="hero-section">
        <div className="card-container">
          <div className="card">
            <div>
              <img className="card-background" src="/images/johny2.jpg" />
            </div>
            <div className="content">
              <div className="card-category">3D design</div>
              <h1>Great workout</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/johny2.jpg" />
            </div>
            <div className="content">
              <div className="card-category">3D design</div>
              <h1>Fast solution</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/johny2.jpg" />
            </div>
            <div className="content">
              <div className="card-category">3D design</div>
              <h1>Helpfull team</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
