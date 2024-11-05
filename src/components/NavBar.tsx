import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { ArtifactLogo } from "../assets"

const NavBar = () => {
    // console.log(navLinks)
    return (
        <nav className="flex justify-between px-4 py-4 bg-black bg-opacity-30">
            <Link to={"/"}><img src={ArtifactLogo} alt="Artifact Band Logo" className="w-10" /></Link>
            <div className="flex items-center">
                {navLinks.map(({ id, title, link }) => (
                    <Link to={link} key={id} className="px-2">{title}</Link>
                ))}
            </div>
        </nav>
    )
}

export default NavBar