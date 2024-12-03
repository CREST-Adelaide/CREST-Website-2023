import Seo from "@components/seo";
import TwitterArea from "@containers/blog/twitter";
import PartnerArea from "@containers/partner/layout-01";
import Layout from "@layout";
import Footer from "@layout/footer/layout-01";
import Header from "@layout/header/layout-01";
import { normalizedData } from "@utils";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import HomeSlider from "@containers/home-slider/layout-01";
import JoinUsArea from "@containers/join-us/layout-01";
import OurWorkSection from "@containers/our-works/layout-01";
import NewsArea from "@containers/news-area/layout-01";
import BlogArea from "@containers/blog/layout-02";

const HomePage = ({ location, data }) => {
  const content = normalizedData(data?.page.content || []);
  const globalContent = normalizedData(data?.allGeneral.nodes || []);
  return (
    <Layout location={location}>
      <Seo title="Centre for Research on Engineering Software Technologies" />
      <Header
        data={{
          ...globalContent["header"],
          ...globalContent["menu"],
        }}
      />
      <main className="site-wrapper-reveal">
        <HomeSlider data={content["slider-section"]} />
        <PartnerArea data={content["partner-section"]} />
        <OurWorkSection
          data={content["our-works-section"]}
          projects={data.recentProjects.nodes}
        />
        {<NewsArea
          data={{
            ...content["news-section"],
            recentNews: data.recentNews.nodes,
          }}
        />}
        {/* <BlogArea
          data={{
            ...content["blog-section"],
            featuredBlog: data.featuredBlogs.nodes[0],
            recentBlogs: data.recentBlogs.nodes,
          }}
        /> */}
        <TwitterArea />
        <JoinUsArea data={content["join-us-section"]} />
      </main>
      <Footer data={{ ...data.site.siteMetadata }} />
    </Layout>
  );
};

export const query = graphql`
  query indexPageQuery {
    allGeneral {
      nodes {
        section
        ...HeaderOne
      }
    }
    site {
      ...Site
    }
    page(title: { eq: "infotechno" }, pageType: { eq: "frontpage" }) {
      content {
        ...PageContent
      }
    }
    featuredBlogs: allArticle(
      filter: { is_featured: { eq: true } }
      sort: { postedAt: { date: DESC } }
      limit: 1
    ) {
      nodes {
        ...BlogThree
      }
    }
    recentBlogs: allArticle(sort: { postedAt: { date: DESC } }, limit: 3) {
      nodes {
        ...BlogFour
      }
    }
    recentNews: allNews(sort: { postedAt: { date: DESC } }, limit: 4) {
      nodes {
        ...NewsOne
      }
    }
    recentProjects: allProject(limit: 12, sort: { postedAt: { date: DESC } }) {
      nodes {
        ...ProjectList
      }
    }
  }
`;

HomePage.propTypes = {
  location: PropTypes.shape({}),
  data: PropTypes.shape({
    page: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    allGeneral: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape({})),
      }),
    }),
    featuredBlogs: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    recentBlogs: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    recentNews: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    recentProjects: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

export default HomePage;
