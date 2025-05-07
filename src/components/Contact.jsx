import { CONTACT } from "../utils/constants/index.js";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Me contacter</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href="tel:+33677630765" className="my-4">
          {CONTACT.phoneNo}
        </a>
        <p>
          <a href="mailto:cedric.chung@epitech.eu" className="border-b">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
