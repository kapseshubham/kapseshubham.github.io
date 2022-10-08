import Link from "next/link";
import React, { Fragment } from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { useViewport } from "../../providers/viewport";
import { FootLink, FootWrapper } from "../Styled/Footer";

const Footer = () => {
  const { width } = useViewport();

  const size = width && width < 768 ? 1.7 : 2;

  return (
    <Fragment>
      <FootWrapper>
        <div>
          <Link href="/" passHref>
            <FootLink>© Shubham Kapse</FootLink>
          </Link>
        </div>
        <div>
          <FootLink
            href="https://github.com/kapseshubham"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={`${size}rem`} />
          </FootLink>
          <FootLink
            href="https://www.linkedin.com/in/shubham-kapse-24b280186/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin size={`${size}rem`} />
          </FootLink>
          <FootLink
            href="https://www.instagram.com/kapse.shubham/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram size={`${size}rem`} />
          </FootLink>
        </div>
      </FootWrapper>
    </Fragment>
  );
};

export default Footer;
