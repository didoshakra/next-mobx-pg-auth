//HomePage.js
import Head from "next/head"
import Layout from "../components/Main/Layout"
import Footer from "../components/Main/Footer"
import MyHomePage from "../components/Shop/MyHomePage"
import Home from "../components/Home"

  export default function HomePage() {

  return (
    <Layout title="RAMAG" description="Мої компоненти">
      <Head>
        {/* <title>{t("header-titleSite")}</title> */}
        <title>RAMAG</title>
      </Head>
      {/* <MyHomePage /> */}
      <Home />
      <Footer />
    </Layout>
  )
}
