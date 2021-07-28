import * as React from 'react'

import {graphql} from "gatsby";
import Layout from '../components/layout'

const BlogPage = ({data}) => {
   console.log(data);
   return (
      <Layout pageName='Blog Page'>
         <div>List of posts</div>
         <ul>
            {
               data?.allMarkdownRemark.edges.map((node) => {

                  return (
                     <article key={node.node.id}>
                        <h2>{node.node.frontmatter.title}</h2>
                        <p>Posted: {node.node.frontmatter.date}</p>

                     </article>
                  )
               })
            }
         </ul>
      </Layout>
   )
}

export const query = graphql`
   query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
     edges {
         node {
           frontmatter {
             date(formatString: "MMMM D, YYYY")
             title
           }
           id
         }
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
