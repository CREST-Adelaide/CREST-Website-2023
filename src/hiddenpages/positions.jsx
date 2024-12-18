import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import ListingArea from "@containers/listing/layout-01";
import GalleryArea from "@containers/gallery/layout-01";
import ContactArea from "@containers/contact/layout-01";

const CareersPage = ({ pageContext, location, data }) => {
  const content = normalizedData(data?.page?.content || []);
  const globalContent = normalizedData(data?.allGeneral.nodes || []);

  return (
    <Layout location={location}>
      <Seo title="Careers" />
      <Header
        data={{
          ...globalContent["header"],
          ...globalContent["menu"],
        }}
      />
      <main className="site-wrapper-reveal">
        <PageHeader
          pageContext={pageContext}
          location={location}
          title="Careers"
        />

        <ListingArea
          dataOpen={content["listing-section-open"]}
          dataClosed={content["listing-section-closed"]}
        />
        {/* <GalleryArea data={content["gallery-section"]} />
                <ContactArea data={content["contact-section"]} /> */}
      </main>
      <Footer data={{ ...data.site.siteMetadata }} />
    </Layout>
  );
};

export const query = graphql`
  query CareersPageQuery {
    allGeneral {
      nodes {
        section
        ...HeaderOne
      }
    }
    site {
      ...Site
    }
    page(title: { eq: "careers" }, pageType: { eq: "innerpage" }) {
      content {
        ...PageContent
      }
    }
  }
`;

CareersPage.propTypes = {
  pageContext: PropTypes.shape({}),
  location: PropTypes.shape({}),
  data: PropTypes.shape({
    allGeneral: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contact: PropTypes.shape({}),
      }),
    }),
    page: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

export default CareersPage;
