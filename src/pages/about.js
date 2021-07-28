import * as React from 'react'
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";

const AboutPage = () => {
   return (
         <div>
            <Layout pageName='About Page'>
               Welcome to about page! I see you went so far
            </Layout>
            <StaticImage src='../images/my_photo.jpg' alt='It`s me'/>
         </div>
   )
}

export default AboutPage
