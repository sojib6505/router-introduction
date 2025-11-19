

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Roots() {
  return (
    <div>
       <Header></Header>
       <Outlet></Outlet>
    </div>
  )
}
