import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import axios from "axios"

export default function TeamView() {
  const data = useLoaderData()

  console.log({data});

  return (
      <main>
          <h1 className="font-serif">Team View</h1>
      </main>
  )
}
 
export let loader: LoaderFunction = async ({ request, params }) => {
  const response: any = await axios({
    url: 'http://django-backend:8000/team/',
    method: 'GET',
  }).catch((err: any) => {
    console.log('AXIOS ERROR: ', { err })
  })

  return response.data.data
}
