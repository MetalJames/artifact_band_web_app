import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { ArtifactLogo } from "../assets"

const NavBar = () => {
    console.log(navLinks)
    return (
        <div className="flex justify-between px-4 py-4">
            <Link to={"/"}><img src={ArtifactLogo} alt="Artifact Band Logo" className="w-10" /></Link>
            <div className="flex">
                {navLinks.map(({ id, title, link }) => (
                    <Link to={link} key={id} className="px-2">{title}</Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar