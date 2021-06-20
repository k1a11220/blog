import React, { FunctionComponent, useMemo } from "react";
import Template from "components/Common/Template";
import CategoryList, { CategoryListProps } from "components/Main/CategoryList";
import PostList, { PostType } from "components/Main/PostList";
import { ProfileImageProps } from "components/Main/ProfileImage";
import { graphql } from "gatsby";
import queryString, { ParsedQuery } from "query-string";

interface CategoriesPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      childImageSharp: {
        fluid: ProfileImageProps["profileImage"];
      };
    };
  };
}

const CategoriesPage: FunctionComponent<CategoriesPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== "string" || !parsed.category
      ? "All"
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps["categoryList"],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType
        ) => {
          categories.forEach((category) => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list["All"]++;

          return list;
        },
        { All: 0 }
      ),
    []
  );
  return (
    <Template
      title="Beomsoo-log"
      description="더 나은 제품을 위한 고민을 적고 있습니다."
      url="url"
      image="img"
    >
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};
export default CategoriesPage;
export const categoryGetPostList = graphql`
  query categoryGetPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
