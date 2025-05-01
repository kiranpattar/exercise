import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Dashboard(){
   return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Logout">
                Logout
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
