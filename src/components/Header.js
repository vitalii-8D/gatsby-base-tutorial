import * as React from 'react'

import PropTypes from 'prop-types'
import {StaticQuery, graphql, Link} from "gatsby"
import {navBar, navLink, siteTitle} from "./css.module.css";

const Header = ({ pageName, data }) => {

   return (
      <header>
         <title>{pageName} | {data?.site.siteMetadata.title}</title>
         <h1 className={siteTitle}>Welcome to my Gatsby site!</h1>
         <nav className={navBar}>
            <Link to='/' className={navLink}>Home</Link>
            <Link to='/about' className={navLink}>About</Link>
            <Link to='/blog' className={navLink}>Blog</Link>
         </nav>
      </header>
   )
}

// 👇 Query component
export default function MyHeader(props) {
   return (
      <StaticQuery
         query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}

         render={data => <Header data={ data } {...props} />}
      />
   )
}

Header.propTypes = {
   data: PropTypes.shape({
      site: PropTypes.shape({
         siteMetadata: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
         }).isRequired,
      }).isRequired,
   }).isRequired,
   pageName: PropTypes.string
}
Header.defaultProps = {

}
