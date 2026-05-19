import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from  'next/image'
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
       
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link href={'/'}className="link link-hover">Branding</Link>
    <Link href={'/'} className="link link-hover">Design</Link>
    <Link href={'/'} className="link link-hover">Marketing</Link>
    <Link href={'/'} className="link link-hover">Advertisement</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link href={'/'} className="link link-hover">About us</Link>
    <a className="link link-hover">Contact</a>
    <Link href={'/'}className="link link-hover">Jobs</Link>
    <Link href={'/'} className="link link-hover">Press kit</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link href={'/'}className="link link-hover">Terms of use</Link>
    <Link href={'/'} className="link link-hover">Privacy policy</Link>
    <Link href={'/'} className="link link-hover">Cookie policy</Link>
  </nav>
    <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <Link href={'/'}>
        <FaInstagram></FaInstagram>
      </Link>
      <Link href={'/'}>
        <FaTwitter></FaTwitter>
      </Link>
      <Link href={'/'}>
      <FaFacebook></FaFacebook>
      </Link>
    </div>
  </nav>
</footer>
    );
};

export default Footer;