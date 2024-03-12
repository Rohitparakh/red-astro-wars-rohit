const Funding = () => {
    return (
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <h2 className="text-white red heading text-[24px] md:text-[56px] upppercase">
                Funding
              </h2>
            </div>
            <div className="fund-text text-center">
              <p className="text-white text-[24px] mt-10 mb-20">
                It's with immense gratitude that we reveal the culmination of
                our fundraising efforts has secured{" "}
                <span className="red text-[30px]">
                  <strong>$120,000</strong>
                </span>{" "}
                in{" "}
                <strong>
                  funding across multiple rounds from a range of backers
                </strong>{" "}
                who believe in our gaming project's potential to fuel the
                development of our gaming venture. We're ready to embark on an
                exciting journey to deliver groundbreaking gameplay and
                unforgettable adventures to gamers worldwide. With this infusion
                of capital, we're positioned to take our vision to the next
                level and deliver an unforgettable gaming experience to our
                audience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Funding;