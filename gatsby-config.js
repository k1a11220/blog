const meta = require("./gatsby-meta-config");

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author,
    siteUrl: meta.siteUrl,
    lang: meta.lang,
    utterances: {
      repo: meta.utterances,
    },
    postTitle: "All",
    menuLinks: [
      {
        link: "/about/",
        name: "About",
      },
      {
        link: meta.links.works,
        name: "Works",
      },
    ],
    plugins: [
      "gatsby-plugin-robots-txt",
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-feed`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-4DWMXJBX6X`, // 측정 ID
        head: true, // head에 tracking script를 넣고 싶다면 true로 변경
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "Github Light Theme",
                parentSelector: {
                  "body[data-theme=dark]": "Dark Github",
                },
              },
              extensions: ["vscode-theme-github-light", "dark-theme-github"],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.title,
        short_name: meta.title,
        description: meta.description,
        lang: meta.lang,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: meta.icon,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-alias-imports`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
