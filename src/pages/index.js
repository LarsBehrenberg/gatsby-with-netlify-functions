import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [input, setInput] = React.useState("")
  const [allInput, setAllInput] = React.useState([])

  const handleSubmit = () => {
    if (input) {
      fetch(`/.netlify/functions/handle-user-input?input=${input}`)
        .then(res => res.text())
        .then(text => setAllInput([...allInput, text]))
    } else {
      window.alert("Please give me some input! 😥")
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Gatsby with Netlify Functions</h1>
      <p>Learn how to create your own serverless functions here.</p>
      <p>Enter your input and get a response from the server.</p>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul style={{ marginTop: "1rem" }}>
        {allInput.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
