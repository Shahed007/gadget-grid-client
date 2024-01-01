import Container from "../../components/container/Container";

const AboutUs = () => {
  return (
    <main>
      <section className="bg-gradient-to-br from-secondary to-primary py-5">
        <h1 className="text-3xl font-bold text-center">About US</h1>
      </section>
      <Container>
        <section className="my-12 dark:text-white text-black">
          <div>
            <p>
              Welcome to Gadget Grid, your ultimate destination for cutting-edge
              technology and innovative gadgets! At Gadget Grid, we are
              passionate about bringing you the latest and greatest in the world
              of electronics, making your life smarter, more connected, and
              undoubtedly more fun.
            </p>
          </div>
          <div>
            <h3 className="my-4 font-semibold text-lg text-black dark:text-white">
              Our Mission
            </h3>
            <p>
              Our mission at Gadget Grid is simple: to provide you with a
              curated selection of high-quality gadgets that seamlessly blend
              style, functionality, and innovation. We believe that technology
              should enhance your lifestyle, simplify your tasks, and spark joy
              in your everyday moments. That's why we handpick each product in
              our collection, ensuring that it meets our stringent standards of
              excellence.
            </p>
          </div>
          <div>
            <h3 className="my-4 font-semibold text-lg text-black dark:text-white">
              What Sets Us Apart
            </h3>
            <p>
              Gadget Grid stands out in the crowded world of online gadget
              retailers through our commitment to customer satisfaction and a
              relentless pursuit of excellence. We understand that every gadget
              enthusiast is unique, and our diverse range of products reflects
              that. From the latest smartphones and smartwatches to home
              automation devices and quirky tech accessories, we have something
              for everyone.
            </p>
          </div>
          <div>
            <h3 className="my-4 font-semibold text-lg text-black dark:text-white">
              Quality Assurance
            </h3>
            <p>
              We prioritize quality and reliability in everything we offer. Our
              team of experts rigorously tests each product to ensure it meets
              our high standards. When you shop at Gadget Grid, you can trust
              that you're investing in top-notch gadgets that will stand the
              test of time.
            </p>
          </div>
          <div>
            <h3 className="my-4 font-semibold text-lg text-black dark:text-white">
              Customer-Centric Approach
            </h3>
            <p>
              Your satisfaction is our priority. We strive to provide a seamless
              and enjoyable shopping experience from start to finish. Our
              dedicated customer support team is always ready to assist you with
              any questions or concerns, ensuring that you feel confident and
              informed throughout your Gadget Grid journey.
            </p>
          </div>
          <div>
            <h3 className="my-4 font-semibold text-lg text-black dark:text-white">
              Stay Connected with Gadget Grid
            </h3>
            <p>
              Join our community of tech enthusiasts and stay updated on the
              latest trends, product launches, and exclusive deals. Follow us on
              social media and subscribe to our newsletter for a front-row seat
              to the exciting world of gadgets.
            </p>
            <p className="mt-4">
              Thank you for choosing Gadget Grid. Elevate your tech game with
              us!
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default AboutUs;
