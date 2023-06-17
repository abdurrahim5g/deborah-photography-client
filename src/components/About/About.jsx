import Title from "../Title/Title";
import "./About.css";

const About = () => {
  return (
    <section className="about-section py-12 md:py-20">
      <div className="site-container">
        <div className="row">
          <Title subtitle="Why"> Us</Title>
        </div>

        <div className="row">
          <div className="grid grid-cols-1 mt-10">
            <div className="about-column">
              <img
                src="https://img.freepik.com/free-photo/couple-dancing-ther-wedding_1157-93.jpg"
                alt="Weadding image"
                className="w-full md:w-2/4 rounded md:float-left mr-10 mb-10 mt-3"
              />

              <h3 className="text-xl font-semibold">
                Capturing Timeless Moments with Precision and Passion
              </h3>
              <p>
                At <strong>Deborah Photography</strong>, we understand that your
                wedding day is a momentous occasion illed with emotions, love,
                and cherished memories. We are dedicated to capturing these
                priceless moments and crafting them into a visual narrative that
                you can treasure for a lifetime.
              </p>
              <p>
                With years of experience and a deep passion for photography, we
                specialize in wedding photography hat goes beyond capturing
                simple snapshots. Our team of skilled photographers combines
                technical expertise with a creative eye, allowing us to tell
                your unique love story through captivating images.
              </p>
              <p>
                What sets us apart is our commitment to providing personalized
                and tailored services to each couple e work with. We believe
                that every wedding is distinct, with its own essence and style.
                That is why we take the time to understand your vision,
                preferences, and aspirations for your wedding photography.
              </p>
              <p>
                From the initial consultation to the final delivery of your
                photographs, we strive to create a eamless and enjoyable
                experience for you. We take pride in our attention to detail and
                the ability to capture not only the big moments but also the
                fleeting glances, tender gestures, and spontaneous laughter that
                make your wedding truly unforgettable.
              </p>
              <p>
                We understand that your wedding day can be a whirlwind of
                emotions, and we are here to support you very step of the way.
                Our photographers are not only professionals but also friendly
                and personable individuals who will put you at ease, allowing
                you to be your authentic selves and enjoy your special day to
                the fullest.
              </p>
              <p>
                Using state-of-the-art equipment and the latest techniques, we
                ensure that every photograph we eliver is of the highest
                quality. Our post-production process includes careful editing
                and retouching to enhance the beauty and emotional impact of
                each image, resulting in a stunning collection that will
                transport you back to your wedding day.
              </p>
              <p>
                At <strong>Deborah Photography</strong>, we are honored to be
                part of your love story. We go above nd beyond to create
                photographs that not only document your wedding but also evoke
                the emotions and preserve the essence of your unique bond. With
                us, you can rest assured that every precious moment will be
                captured with precision, passion, and an unwavering commitment
                to excellence.
              </p>
              <p>
                Contact us today to discuss your wedding photography needs and
                let us create timeless memories that ill be treasured for
                generations to come
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
