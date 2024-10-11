import * as React from "react"
import { Link } from "gatsby"
import Test from "../../components/test"

export default function Index() {
  return (
    <>
    <Test name="Cadastro"></Test>
    <Link to="/">Home</Link>
    </>
  )
}

export const Head = () => <title>Home Page</title>