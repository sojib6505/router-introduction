import { useLoaderData } from "react-router-dom"

export default function Users() {
    const users = useLoaderData()
    console.log('user console is here',users)
  return (
    <div>Users</div>
  )
}
