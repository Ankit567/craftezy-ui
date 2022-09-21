import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FAQs_LIST } from "../../data/FAQ";

const FAQ = () => {
  return (
    <section className="text-center">
      <h2 className="sm:mb-5 mb-3 font-semibold sm:text-[32px] text-xl leading-[48px] text-onyx">Frequently Asked Questions</h2>
      <p className="font-open-sans sm:text-[18px] text-base leading-[25px] text-[#4A4A4A] sm:mb-12 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      {FAQs_LIST.map((faq, index) => (
        <Disclosure key={index} as="div" className="border-b border-[#D1D1D1]">
          {({ open }) => (
            <Fragment>
              <Disclosure.Button className="py-2 block md:text-[20px] text-base leading-[30px] text-[#7C7C7C] w-full flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="md:block hidden">
                  <Image src={open ? "/images/faq-minus.svg" : "/images/faq-plus.svg"} width={28} height={28} />
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 sm:text-base text-sm sm:text-left text-center mb-6 mt-3">{faq.answer}</Disclosure.Panel>
            </Fragment>
          )}
        </Disclosure>
      ))}
      <button className="border border-beer text-beer bg-wite hover:bg-beer hover:text-white transition ease-in-out mt-10 mb-14 sm:px-16 sm:py-3 px-8 py-2 font-medium md:text-lg text-sm leading-[27px]">
        Read More
      </button>
    </section>
  );
};

export default FAQ;
