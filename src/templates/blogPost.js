import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "layout/layout";
import SEO from "components/seo";
import Comment from "components/comment";
import { rhythm } from "styles/typography";
import Category from "styles/category";
import DateTime from "styles/dateTime";
import Markdown from "styles/markdown";
import Img from "gatsby-image";

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, desc, thumbnail, date, category },
      html,
    },
  } = data;

  let featuredImgFluid = thumbnail.childImageSharp.fluid;
  const ogImagePath = thumbnail && thumbnail.childImageSharp.fixed.src;

  return (
    <Layout>
      <SEO title={title} description={desc} image={ogImagePath} />
      <main>
        <article>
          <OuterWrapper>
            <InnerWrapper>
              <div>
                <header>
                  <Info>
                    <PostCategory>{category}</PostCategory>
                    <Time dateTime={date}>{date}</Time>
                  </Info>
                  <Title>{title}</Title>
                  <ThumbnailImg fluid={featuredImgFluid} alt="thumbnail" />
                  {/* <Desc>{desc}</Desc> */}
                </header>
                <Divider />
                <Markdown
                  dangerouslySetInnerHTML={{ __html: html }}
                  rhythm={rhythm}
                />
              </div>
            </InnerWrapper>
          </OuterWrapper>
        </article>
        <CommentWrap>
          <Comment />
        </CommentWrap>
      </main>
    </Layout>
  );
};

const ThumbnailImg = styled(Img)`
  align-self: center;
  /* aspect-ratio: 16 / 9; */
  width: 130%;
  height: 490px;
  border-radius: var(--border-radius-base);

  @media (max-width: ${({ theme }) => theme.device.md}) {
    width: 90vw;
    height: 420px;
  }
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 100%;
    height: 200px;
  }
`;

const OuterWrapper = styled.div`
  margin-top: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-lg);
  }
`;

const InnerWrapper = styled.div`
  width: var(--post-width);
  margin: 0 auto;
  padding-bottom: var(--sizing-lg);

  & header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
  }
`;

const CommentWrap = styled.section`
  width: 100%;
  padding: 0 var(--padding-sm);
  margin: 0 auto;
  margin-bottom: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: auto;
  }
`;

const PostCategory = styled(Category)`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--sizing-md);
`;

const Time = styled(DateTime)`
  display: block;
  margin-top: var(--sizing-xs);
`;

// const Desc = styled.p`
//   margin-top: var(--sizing-md);
//   line-height: 1.5;
//   font-size: var(--text-base);
//   text-align: center;
//   color: var(--color-gray-5);

//   @media (max-width: ${({ theme }) => theme.device.sm}) {
//     line-height: 1.31579;
//     font-size: 1.1875rem;
//   }
// `;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-3);
  margin-top: var(--sizing-lg);
  margin-bottom: var(--sizing-lg);
`;

const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  line-height: 1.1875;
  font-size: var(--text-title-lg);
  text-align: center;
  margin-bottom: var(--sizing-lg);
  @media (max-width: ${({ theme }) => theme.device.md}) {
    line-height: 1.21875;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.21875;
    font-size: 2rem;
  }
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        thumbnail {
          childImageSharp {
            fluid(quality: 100, sizes: "maxWidth: 3840") {
              ...GatsbyImageSharpFluid
            }
            fixed(quality: 100) {
              src
            }
          }
        }
        date(formatString: "YYYY-MM-DD")
        category
      }
    }
  }
`;

export default BlogPost;
