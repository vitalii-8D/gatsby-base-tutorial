module.exports = {
   siteMetadata: {
      title: "Gatsby tutorial",
      description: "Its really me first Gatsbys site"
   },
   plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "blog",
            path: `${__dirname}/blog/`
         }
      },
      'gatsby-transformer-remark'
      // {
      //    resolve: `gatsby-plugin-mdx`,
      //    options: {
      //       extensions: [`.mdx`, `.md`],
      //    },
      // }
   ],
};
