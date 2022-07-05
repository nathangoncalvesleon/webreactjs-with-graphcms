import { useEffect } from "react"
import { client } from './lib/apollo'
import { gql, useQuery } from '@apollo/client'
import Event from "./pages/Event/Event"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }`
function App() {


  return (
    <Event/>
  )
}

export default App
