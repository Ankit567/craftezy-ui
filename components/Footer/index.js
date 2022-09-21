import Link from "next/link";
import Image from "next/image";

const Footer = (params) => {
  return (
    <footer className="lg:text-left bg-brown text-white">
      <div className="wrapper py-10 md:text-left">
        <div className="flex flex-wrap">
          <div className="lg:flex-1 lg:basis-auto basis-full mb-7">
            <Image src="/images/logo.svg" width={230} height={38} />
            <p className="mt-3 text-open-sans sm:text-lg text-base leading-[25px] lg:max-w-[270px]">
              Craftezy is an online handicraft trade platform that aims to digitize the entire process of buying and selling handicrafts for
              traders across the globe.
            </p>
          </div>

          <div className="lg:ml-6 min-w-max lg:basis-auto md:basis-1/4 basis-2/4 mb-7">
            <h2 className="font-medium lg:text-[24px] text-lg leading-[36px] mb-3">Business</h2>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">Our Solutions</a>
            </Link>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">Marketplace</a>
            </Link>
          </div>

          <div className="lg:ml-6 min-w-max lg:basis-auto md:basis-1/4 basis-2/4 mb-7">
            <h2 className="font-medium lg:text-[24px] text-lg leading-[36px] mb-3">Company</h2>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">About us</a>
            </Link>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">News &amp; Press</a>
            </Link>
            <Link href="/blogs">
              <a className="sm:text-lg text-base leading-[25px] font-open-sans block mb-1">Blog</a>
            </Link>
          </div>

          <div className="lg:ml-6 min-w-max lg:basis-auto md:basis-1/4 basis-2/4 mb-7">
            <h2 className="font-medium lg:text-[24px] text-lg leading-[36px] mb-3">Policies</h2>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1 break-words	md:max-w-auto max-w-[170px]">Terms &amp; Condition</a>
            </Link>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1 break-words	md:max-w-auto max-w-[170px]">Return &amp; Refund Policy</a>
            </Link>
            <Link href="/">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">Shipping Policy</a>
            </Link>
            <Link href="/">
              <a className="sm:text-lg text-base leading-[25px] font-open-sans block mb-1">Privacy Policy</a>
            </Link>
          </div>

          <div className="lg:ml-6 min-w-max lg:basis-auto md:basis-1/4 basis-2/4 mb-7">
            <h2 className="font-medium lg:text-[24px] text-lg leading-[36px] mb-3">Contact us</h2>
            <Link href="mailto:info@craftezy.com">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">info@craftezy.com</a>
            </Link>
            <Link href="tel:+91-7856415665">
              <a className="lg:text-lg text-base leading-[25px] font-open-sans block mb-1">+91-7856415665</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
