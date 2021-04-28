import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import FeaturesWidget from "../components/FeaturesWidget"

export const CommitteePageTemplate = ({ image,title, content, contentComponent,intro }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient" style={{paddingTop:`0px`}}>
      <div className="container">
      <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    ></div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <FeaturesWidget gridItems={intro.blurbs} />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CommitteePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const CommitteePage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CommitteePageTemplate
        image={frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

CommitteePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CommitteePage

export const aboutPageQuery = graphql`
  query CommitteePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, maxHeight: 180, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            header
            text
          }
          heading
          description
        }
      }
    }
  }
`
