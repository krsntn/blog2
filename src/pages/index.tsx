import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { usePosts } from '../hooks/usePosts';

const IndexPage = ({ location }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = usePosts();
  console.log(posts);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default IndexPage;
