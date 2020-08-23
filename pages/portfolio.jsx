import Navbar from "../components/navbar";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/img/portfolio/1.jpg" alt="portfolio-1" />

                <h4 className="portfolio-name">Superman Lego</h4>
                <div className="portfolio-catego">Illustration</div>
              </div>

              <div className="portfolio-item">
                <img src="/img/portfolio/2.jpg" alt="portfolio-2" />

                <h4 className="portfolio-name">Supermario Enemy</h4>
                <div className="portfolio-catego">Illustration</div>
              </div>

              <div className="portfolio-item">
                <img src="/img/portfolio/3.jpg" alt="portfolio-3" />

                <h4 className="portfolio-name">Ice Cream Patrick</h4>
                <div className="portfolio-catego">Illustration</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
