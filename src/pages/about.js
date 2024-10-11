import * as React from "react"
import Test from "../components/test"
import { Link } from "gatsby"

export default function Index() {
  return (
    <>
    <Test name="About"></Test>
    <Link to="/">Home</Link>
    </>
  )
}

export const Head = () => <title>Home Page</title>