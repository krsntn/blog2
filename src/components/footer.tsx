import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Footer = () => {
  const data = useSiteMetadata();
  console.log(data);
  const siteAuthor: string = data.site.siteMetadata.author.name;

  return (
    <footer className="py-12 text-center">
      © {new Date().getFullYear()}, Briefly crafted by
      {` `}
      <a href="https://dev.krsn.xyz">{siteAuthor}</a>
    </footer>
  );
};

export default Footer;
