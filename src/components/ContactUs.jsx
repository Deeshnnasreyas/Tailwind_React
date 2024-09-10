import { RiMailLine, RiMapPinFill, RiPhoneLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants/index";
const ContactUs = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl uppercase tracking-tight mb-12 text-center">
          contact us
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-2xl mr-4" />
            <div>
              <p className="text-lg ">{CONTACT_INFO.phone.label}</p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-2xl mr-4" />
            <div>
              <p className="text-lg ">{CONTACT_INFO.email.label}</p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMapPinFill className="text-2xl mr-4" />
            <div>
              <p className="text-lg ">{CONTACT_INFO.address.label}</p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
