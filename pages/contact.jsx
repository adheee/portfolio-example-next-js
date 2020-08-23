import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem doloribus saepe ad omnis
            </p>

            <ul className="contact-links">
              <li className="contact-item">
                <Link href="http://github.com/adheee">
                  <a> My Github</a>
                </Link>
              </li>
              <li className="contact-item">
                <Link href="http://instagram.com/adhee.pratama">
                  <a> My Instagram</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
