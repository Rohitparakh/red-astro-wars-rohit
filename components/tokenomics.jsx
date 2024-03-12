const Tokenomics = () => {
    return (
      <div className="rainbow-about-area text-white" id="Tokenomics">
        <div className="rainbow-section-gap">
          <div className="container mx-auto">
            <div className="section-title text-center">
              {/* <h4 class="subtitle "><span class="theme-gradient">AirBot</span></h4> */}
              <h2 className="heading text-[24px] md:text-[56px] upppercase w-600 mb--20">
                Tokenomics
              </h2>
            </div>

            <div className="flex flex-wrap mt-5 justify-between px-10 py-20">
              <div className="w-full md:w-1/2 mb-10">
                <div className="content">
                  <div className="section-title">
                    <h4 className="subtitle mb-4">
                      <span className="red text-[22px]">
                        Token Distribution
                      </span>
                    </h4>

                    <div>
                      <div className="single-progress mb-4">
                        <div className="flex justify-between mb-2">
                          <h6 className="title">SEED</h6>
                          <span className="progress-number">5%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar width-10"></div>
                        </div>
                      </div>

                      <div className="single-progress mb-4">
                        <div className="flex justify-between mb-2">
                          <h6 className="title">MARKETING</h6>
                          <span className="progress-number">5%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bar-color-2 width-10"></div>
                        </div>
                      </div>

                      <div className="single-progress mb-4">
                        <div className="flex justify-between mb-2">
                          <h6 className="title">CEX</h6>
                          <span className="progress-number">5%</span>
                        </div>

                        <div className="progress">
                          <div className="progress-bar width-10 bar-color-3"></div>
                        </div>
                      </div>

                      <div className="single-progress mb-4">
                        <div className="flex justify-between mb-2">
                          <h6 className="title">TEAM</h6>
                          <span className="progress-number">5%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar width-10 bar-color-4"></div>
                        </div>
                      </div>
                      <div className="single-progress mb-4">
                        <div className="flex justify-between mb-2">
                          <h6 className="title">LP</h6>
                          <span className="progress-number">80%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar width-80"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-[8em] ">
                <div className="titttle">
                  <div className="section-title">
                    <h4 className="subtitle mb-4">
                      <span className="red text-[22px]">Token Information</span>
                    </h4>
                  </div>
                  <div className="inner">
                    <ul className="feature-list">
                      <li className="flex item-center mb-2">
                        <div className="title-wrapper">
                          <h4 className="title text-[18px]">
                            Token Name:{" "}
                            <strong className="title strong">RAW</strong>{" "}
                          </h4>
                        </div>
                      </li>
                      <li className="flex item-center mb-2">
                        <div className="title-wrapper">
                          <h4 className="title text-[18px]">
                            Token symbol:{" "}
                            <strong className="title strong">$RAW</strong>{" "}
                          </h4>
                        </div>
                      </li>
                      <li className="flex items-center mb-2">
                        <div className="title-wrapper">
                          <h4 className="title text-[18px]">
                            Token Supply:{" "}
                            <strong className="title strong">10,000,000</strong>
                          </h4>
                        </div>
                      </li>
                      <li className="flex items-center mb-2">
                        <div className="title-wrapper">
                          <h4 className="title text-[18px]">
                            Buy/Sell Tax:{" "}
                            <strong className="title strong">5:5</strong>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Tokenomics;