import React from "react";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-[url(/Hero.png)] bg-cover bg-no-repeat py-40">
      <Container>
        <h2 className="text-primary text-center text-5xl font-bold">
          JOBBazarBD
        </h2>

        <p className="mt-5 text-center text-3xl font-medium">
          An Authentic Job Searching Platform in Bangladesh
        </p>

        <h3 className="text-primary mt-5 text-center text-4xl font-bold">
          +880000456464646
        </h3>

        <p className="text-primary/90 mt-28 text-center text-base">
          @ 2025 JobBazarBD - Job Portal. ROL Studio Bangladesh All rights
          Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
