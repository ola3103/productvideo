const SectionOne = () => {
  return (
    <section className="section--1">
      <div className="container section--1--box">
        <h1 className="section--1--header--1">
          Finding inspiration is <span>hard.</span>
        </h1>
        <h1 className="section--1--header--2">Stop wasting your time.</h1>
        <p className="section--1--title--1">
          You are a SaaS founder, marketing agency or video freelancer and are
          planning to create a product video that will stand out from the crowd?
        </p>
        <p className="section--1--title--2">We got you covered.</p>
        <div className="section--1--box-2">
          <div className="section--1--box-2-side-1">
            <div className="single-section--1--box-2-side-1">
              <div className="single-section--1--box-2-side-1--top--part">
                <img src="/img3.svg" className="top--part--img" />
                <h1 className="single-section-1-top-text">
                  We did the hard work for you
                </h1>
              </div>
              <p className="single-section-1-text--1">
                Stop wasting time searching for video inspiration
              </p>
              <p className="single-section-1-text--2">
                We spent countless weeks carefully collecting the best SaaS
                videos from the web so you don&apos;t have to.
              </p>
              <p className="single-section-1-text--1">
                Our library is growing by the day.
              </p>
            </div>
            <div className="single-section--1--box-2-side-1">
              <div className="single-section--1--box-2-side-1--top--part">
                <img src="/img2.svg" className="top--part--img" />
                <h1 className="single-section-1-top-text">
                  Filter based on your needs
                </h1>
              </div>
              <p className="single-section-1-text--1">
                We have conveniently categorized all videos based on a number of
                features such as length, video type and industry so you can find
                videos that fit your intended use case.
              </p>
              <p className="single-section-1-text--2">
                Looking for action-packed 30s videos or need a 2-minute
                explainer demo video?
              </p>
              <p className="single-section-1-text--1">
                We&apos;ve got you covered.{" "}
              </p>
            </div>
            <div className="single-section--1--box-2-side-1">
              <div className="single-section--1--box-2-side-1--top--part">
                <img src="/img1.svg" className="top--part--img" />
                <h1 className="single-section-1-top-text">
                  Pay once, love forever
                </h1>
              </div>
              <p className="single-section-1-text--1">
                Not another annoying subscription. Get lifetime access to our
                library of high quality SaaS videos for single one-time payment.
                ROI guaranteed.
              </p>
            </div>
          </div>
          <img src="img4.svg" className="section--1--box-2-side-2" />
          <div className="section--1--box-2-side-3">
            <video autoPlay muted>
              <source
                src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/app_demo_vid.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
