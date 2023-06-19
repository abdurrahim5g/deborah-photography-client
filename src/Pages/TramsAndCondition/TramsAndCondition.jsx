import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./TramsAndCondition.css";

const TramsAndCondition = () => {
  return (
    <section
      className="trams-and-condition-page py-12 md:py-20 "
      style={{ background: "var(--bg-color)" }}
    >
      <div className="site-container">
        <div className="trams-container">
          <Title subtitle={"Trams and "}>Condition</Title>
          {/* <h2>Terms and Conditions:</h2> */}
          <h3>1. Booking Confirmation:</h3>
          <p>
            - A signed contract and a non-refundable deposit of 50% are required
            to secure the wedding photography services for the specified date
            and time.
          </p>
          <h3>2. Payment:</h3>
          <p>
            - The remaining balance is due one week prior to the wedding day.
          </p>
          <p>
            - Additional charges for extra hours or services requested on the
            wedding day will be invoiced separately and must be paid within 14
            days after the event.
          </p>
          <h3>3. Cancellation and Rescheduling:</h3>
          <p>- In the event of cancellation, the deposit is non-refundable.</p>
          <p>
            - If the wedding date is rescheduled, the deposit can be applied to
            the new date, subject to availability.
          </p>
          <p>
            - In case of cancellation or rescheduling due to unforeseen
            circumstances (natural disasters, severe illness, etc.), we will
            make every effort to accommodate an alternative date or provide a
            full refund of any paid amounts.
          </p>
          <h3>4. Image Delivery:</h3>
          <p>
            - The final edited digital images will be delivered within 4-6 weeks
            after the wedding day.
          </p>
          <p>
            - All images will be provided in a high-resolution digital format
            via an online gallery for easy viewing, sharing, and downloading.
          </p>
          <h3>5. Usage Rights:</h3>
          <p>
            - The client receives personal usage rights to the images, allowing
            them to print, share, and display the photographs for personal,
            non-commercial purposes.
          </p>
          <p>
            - The photographer retains the copyright to all images and reserves
            the right to use select images for promotional purposes, including
            website, portfolio, and social media.
          </p>
          <h3>6. Photography Style and Artistic Expression:</h3>
          <p>
            - The client acknowledges that the photographer has a particular
            style and artistic approach, which may include post-processing
            techniques and creative editing.
          </p>
          <p>
            - The photographer has full creative control over the final look and
            selection of images provided.
          </p>
          <p>
            - The client agrees to trust the photographers professional judgment
            regarding poses, locations, and artistic decisions.
          </p>
          <h3>7. Model Release:</h3>
          <p>
            - The client grants permission for the photographer to use the
            images featuring the client, including friends, family, and wedding
            guests, for promotional and marketing purposes.
          </p>
          <h3>8. Liability:</h3>
          <p>
            - The photographer will make every effort to capture all requested
            moments and deliver high-quality images, but cannot guarantee
            specific shots due to unforeseen circumstances or factors beyond
            their control.
          </p>
          <p>
            - In the unlikely event of equipment failure, loss, or other
            unforeseen circumstances that prevent the photographer from
            fulfilling the services, liability is limited to a refund of any
            payments received.
          </p>
          <p>
            By signing the contract and submitting the deposit, the client
            agrees to the terms and conditions outlined above.
          </p>

          <div className="go-back-to-signup mt-10 text-center">
            <Link
              className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
              to="/signup"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TramsAndCondition;
