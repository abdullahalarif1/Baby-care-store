import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#6E818A] text-white ">
      <aside>
        <Link href="/" className=" text-xl">
          <Image
            src="https://i.ibb.co/x8q3F4d/F-removebg-preview-2.png"
            alt="baby care"
            width={200}
            height={200}
          />
        </Link>
        <p className="md:ps-8">
          Baby Care Store Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/products" className="link link-hover">
          Products
        </Link>
        <Link href="/flash-sale" className="link link-hover">
          Flash Sale
        </Link>
        <Link href="/category" className="link link-hover">
          Category
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="" className="link link-hover">
          About us
        </Link>
        <Link href="" className="link link-hover">
          Contact
        </Link>
        <Link href="" className="link link-hover">
          Jobs
        </Link>
        <Link href="" className="link link-hover">
          Press kit
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="" className="link link-hover">
          Terms of use
        </Link>
        <Link href="" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
