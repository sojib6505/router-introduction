import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div>
         <ul>
            <Link to='/'> Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/shop'>Shop</Link>
        </ul>
    </div>
  )
}
