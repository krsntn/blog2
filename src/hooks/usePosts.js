import { useStaticQuery, graphql } from 'gatsby';

export const usePosts = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  return data;
};
