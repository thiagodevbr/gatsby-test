import * as React from "react"
import Layout from "../components/layout"
import Test from "../components/test"

export default function Index() {
  return <Layout title="Home Page"> <Test name="Component Test"></Test> </Layout>
}

export const Head = () => <title>Home Page</title>