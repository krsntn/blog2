import React from 'react';
import { Link } from 'gatsby';
import DarkModeToggleButton from './DarkModeToggleButton';

import Footer from './footer';
import '../styles/global.css';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Layout = ({ location, children }) => {
  const siteMetadata = useSiteMetadata();

  const header = (
    <>
      <img
        src="/images/profile.png"
        alt={siteMetadata.site.siteMetadata.author.name}
        placeholder="tracedSVG"
        backgroundColor="#ccc"
        layout="fixed"
        width={100}
        height={100}
        className="hidden md:block rounded-full"
      />
      <DarkModeToggleButton />
      <h2
        style={{
          fontFamily: `Montserrat, sans-serif`,
        }}
        className="my-2"
      >
        <Link
          style={{
            fontWeight: 'unset',
            boxShadow: 'none',
            color: 'var(--textTitle)',
          }}
          to={`/`}
        >
          {siteMetadata.site.siteMetadata.title}
        </Link>
      </h2>
    </>
  );

  return (
    <div
      className="dark:bg-gray-900 bg-white transition duration-500 ease-out"
      style={{
        color: 'var(--textNormal)',
        minHeight: '100vh',
      }}
    >
      <div className="sidebar">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
          style={{ minHeight: 200 }}
        >
          {header}
        </div>
      </div>

      <div className="main-content relative">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
