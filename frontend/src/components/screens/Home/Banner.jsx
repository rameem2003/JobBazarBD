import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";

const Banner = () => {
  return (
    <section className="bg-[url(/Hero.png)] bg-cover bg-no-repeat py-5">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-8/12">
            <h1 className="text-primary text-[60px] font-bold">
              Find a job that aligns with your interests and skills
            </h1>

            <p className="mt-7 text-lg font-medium text-black">
              Thousands of jobs in all the leading sector are waiting for you.
            </p>
          </div>
          <div className="w-4/12">
            <img src="./banner.png" alt="" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
