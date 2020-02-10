import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <>
          <div>
              <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
            <Footer />
          </div>
        </>
      )
}

export default Layout