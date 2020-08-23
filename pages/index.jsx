import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hello, saya Adhe Pratama</h1>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              illo vel facilis molestiae assumenda distinctio tempore minima
              repellat magni consectetur?
            </p>

            <Link href="/contact">
              <a className="btn">Kontak saya</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <img src="img/human.jpg" alt="human-logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
