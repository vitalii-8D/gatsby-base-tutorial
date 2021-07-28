import * as React from 'react'

import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import Layout from '../components/layout'

const BlogPage = ({data}) => {

   return (
      <Layout pageName='Blog Page'>
         <div>List of posts</div>
         <ul>
            {
               data?.allMdx.nodes.map((node) => (
                  <article key={node.id}>
                     <h2>{node.frontmatter.title}</h2>
                     <p>Posted: {node.frontmatter.date}</p>
                     <MDXRenderer>
                        {node.body}
                     </MDXRenderer>
                  </article>
               ))
            }
         </ul>
      </Layout>
   )
}

export const query = graphql`
   query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
     nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
         }
         id
         body
     }
   }
}
`
// export const query = graphql`
//    query {
//      allFile {
//        nodes {
//          name
//        }
//      }
//    }
// `

// query MyQuery {
//    allMdx {
//       nodes {
//          parent {
//          ... on File {
//                modifiedTime(formatString: "MMMM D, YYYY")
//             }
//          }
//       }
//    }
// }

export default BlogPage
