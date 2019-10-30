module.exports = {
  siteMetadata: {
    title: `Erwin Heba Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
     {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "myPage",
        fieldName: "myPage",
        url: "https://api-euwest.graphcms.com/v1/ck2d5g89d2vcu01ff65f04cbh/master",
      },
    }
  ]
}
