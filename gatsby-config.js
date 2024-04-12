/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "CREST - Centre for Research on Engineering Software Technologies",
    titleTemplate: "CREST",
    description:
      "CREST is a center for Research on Engineering Software Technologies located at the University of Adelaide. ",
    author: "@crest_uofa",
    twitterUsername: "@crest_uofa",
    image: "landing.png",
    siteUrl: "https://new.crest-centre.net/",
    getform: "https://getform.io/f/58c49e90-e767-4e18-959e-4fcd84bf8659",
    copyright:
      "CREST. <a href='https://crest-centre.net/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com/crest_uofa",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com/company/crest-centre/",
    },
    contact: {
      phone: "+61 8 8313 4478",
      address:
        "Ingkarni Wardli 4.54, North Terrace, The University of Adelaide, SA, Australia",
      email: "CREST@adelaide.edu.au",
      // website: "https://www.adelaide.edu.au/directory/ali.babar",
      rating: "4.9",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          id: "adelaide",
          state: "South Australia",
          address: "Room 4.54, Ingkarni Wardli, North Terrace",
          email: "ali.babar@adelaide.edu.au",
          phone: "+61 8 8313 4478",
        },
      ],
    },
  },
  // mapping: {
  // 	"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  // },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-postcss`,
    // Add after these plugins if used
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: [/^bm-/, /^swiper-/], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-json",
    `gatsby-plugin-anchor-links`,
    // "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-mdx-frontmatter",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mitech",
        short_name: "mitech",
        theme_color: "#086ad8",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icon: "src/assets/images/favicon.png",
        icons: [
          {
            src: "/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [`/dev-404-page`, `/404`, `/404.html`],
        useClassNames: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/.*`],
      },
    },
    "gatsby-plugin-netlify",
  ],
};
