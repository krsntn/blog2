import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            title
            author {
              name
              summary
            }
            social {
              twitter
            }
          }
        }
      }
    `
  );
  return data;
};
