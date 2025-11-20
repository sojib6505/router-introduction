import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div>
         <ul>
            <Link to='/'> Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users2'>Users2</Link>
        </ul>
    </div>
  )
}
