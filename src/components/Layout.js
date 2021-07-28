import  * as React from 'react'

import Header from './Header'

import {container, title} from './css.module.css'

const Layout = ({pageName, children}) => {

   return (
      <main className={container}>
         <Header pageName={pageName}/>
         <h1 className={title}>{pageName}</h1>
         {children}
      </main>
   )
}

export default Layout
