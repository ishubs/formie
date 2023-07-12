import { Children } from "react";
import Navbar from "./Navbar";

export default function Layout({ Children }) {
    return (
        <div>
            <Navbar />
            {Children}
        </div>
    )
}