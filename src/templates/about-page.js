import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import FeatureGrid from '../components/Features'

export const AboutPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
          opacity: 0.8,

        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p style={{ fontSize: `18px` }}>The Canterbury PNG Wantoks Inc. is made up of Papua New Guinea families living, working and studying in and around Christchurch, in the South Island of Aotearoa New Zealand.</p>
              <br />
              <br />
              <br />
              <br />
              <img src="/img/values_three.png" alt="Our values" style={{ width: `100%`, height: `auto`, display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: `500px` }}></img>
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontSize: `18px` }}>A group of volunteers make up the <a style={{ color: `#f40` }} href="/committee">Executive Team</a> to help run the association. Executive meetings are held at the end of each month except during the festive season (i.e. December – January).</p>
              <br />
              <br />
              <br />
              <img src='/img/kids.jpg' alt='Community Meeting' style={{ width: `100%`, height: `auto` }}></img>
              <br />
              <br />
              <br />
              <br />
              <br />

              <div style={{
                borderStyle: `solid`,
                borderWidth: `2px`,
                borderRadius: `5px`,
                borderColor: `lightgray`,
                padding: `15px`,
                fontSize: `18px`
              }}>
                <br />
                <p>Our goal is to bring together all Papua New Guineans and friends of PNG in Canterbury and the wider region to:</p>
                <ul>
                  <li>Share our stories</li>
                  <li>Teach and pass our culture onto our children, the future generation</li>
                  <li>Organise and participate in important events such as our Independence Day to showcase our vast culture, language and food</li>
                  <li>Stay in touch with each other</li>
                </ul>
                <FeatureGrid gridItems={intro.blurbs} />
              </div>
             
              <br />
              <div style={{
                borderStyle: `solid`,
                borderWidth: `2px`,
                borderRadius: `5px`,
                borderColor: `white`,
                padding: `15px`,
                fontSize: `18px`
              }}>
                <br />
              <p style={{ fontSize: `18px` }}>We as a community acknowledge and thank the tangata whenua - Nga iwi Māori of Aotearoa, and in particular Te iwi o Ngāi Tahu the guardians of Te Waipounamu, whose beautiful lands we come together in.</p>
              
              <br />
              <img src='/img/canterbury_alps_2.jpg' alt='Canterbury Alps' style={{ width: `100%`, height: `auto` }}></img>
              </div>
              <br />
              <br />
              <div>
              <br />
              <p style={{ fontSize: `18px` }}>Olgeta wantoks na poro man na meri sapos yu laik, <a style={{ color: `#f40` }} href="/contact">kontakim mipela</a> na joinim bikpela famili lon Christchurch, gaden biktaun bilong New Zealand.</p>
              <p style={{ fontSize: `18px` }}>To all our friends, feel free to <a style={{ color: `#f40` }} href="/contact">contact us</a> and be part of our big family in Christchurch, the Garden City of New Zealand.</p>
              <br />
              </div>
              <br />
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">

              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
        main {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
