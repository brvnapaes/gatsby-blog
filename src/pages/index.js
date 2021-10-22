import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/index.styles.css'

export default ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>
          Meus Posts
        </h1>
        <div className='posts-grid'>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className='post' key={ node.id }>
              <Link to={node.fields.slug}>
                <span>{ node.frontmatter.title } - <small>{ node.frontmatter.date }</small></span>
              </Link>
              <p>{ node.excerpt }</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
