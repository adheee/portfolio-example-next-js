import Navbar from "../components/navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Profile</h1>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem doloribus saepe ad omnis vitae porro facere rem
              quo. Ipsam temporibus a corrupti cumque dicta ullam, non ad iste
              commodi nam nisi iusto officia quaerat id enim quasi molestiae!
              Ipsam repellendus, tenetur repudiandae obcaecati delectus quam,
              cum iusto voluptate sequi consectetur voluptas itaque distinctio
              nobis porro officiis laborum atque! Iure quasi ex beatae vero enim
              eaque rerum repellendus repellat consequuntur. Harum consequuntur
              consectetur at minima error magni officiis est debitis recusandae
              odit laudantium cum rerum reiciendis itaque eos nostrum earum
              nesciunt maxime nihil autem, sequi quisquam! Voluptate suscipit
              beatae illum accusantium.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
