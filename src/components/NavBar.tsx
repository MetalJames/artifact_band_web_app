import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"

const NavBar = () => {
    console.log(navLinks)
    return (
        <div className="flex justify-between px-4 py-4">
            <div>LOGO Will be here</div>
            <div className="flex">
                {navLinks.map(({ id, title, link }) => (
                    <Link to={link} key={id} className="px-2">{title}</Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar