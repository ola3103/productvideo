const HeroSection = () => {
  return (
    <section className="hero--section">
      <div className="container hero--box">
        <div className="hero--side-1">
          <img className="hero--side--badge" src="/top-post-badge.svg" />
          <p className="top-post--1">
            Get inspired & unlock the full potential of video marketing
          </p>
          <h1 className="top-post--2">
            Create product videos that <span>convert</span>
          </h1>
          <p className="top-post--3">
            Learn from more than 100+ hand selected videos of companies that
            create engaging, shareable product videos that not only boost brand
            awareness but also convert customers.
          </p>
          <div className="top--part--btn--box">
            <button className="top--btn-1">
              Get access to 100+ videos now
            </button>
            <button className="top--btn-2">Learn more </button>
          </div>
          <div className="top--post--4">
            <img src="/top-post-image.png" className="top--post--4--img" />
            <div className="top--post--4-text">
              <p className="top--post--4-text-1">
                &quot;I am about to launch a new product and needed inspiration
                for creating our new Product Hunt launch video. This site has
                been an amazing resource for us.&quot;
              </p>
              <p className="top--post--4-text-2">
                Alex Styl, founder of Composables
              </p>
            </div>
          </div>
        </div>
        <div className="hero--side-2">
          <div className="hero--side-2--1">
            <div className="hero--side-2--box">
              <video autoPlay muted>
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim%20-%2002.mp4deo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="hero--side-2--box">
              <video autoPlay muted>
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim%20-%2002.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="hero--side-2--box hero--side-2--box--remove">
              <video autoPlay muted>
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim%20-%2002.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="hero--side-2--2">
            <div className="hero--side-2--box">
              <video autoPlay muted>
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim%20-%2002.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="hero--side-2--box">
              <video autoPlay muted>
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim%20-%2002.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="hero--side-2--box hero--side-2--box--remove">
              <video autoPlay muted>
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim%20-%2002.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
