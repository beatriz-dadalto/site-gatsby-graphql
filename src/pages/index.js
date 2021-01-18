import React from "react";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="#1fa1f2"
      category="Misc"
      date="18 de Janeiro de 2021"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razoẽs para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </Layout>
)

export default IndexPage
