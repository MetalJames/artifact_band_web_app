import { NoOneIMG } from "../assets"

const Hero = () => {

    return (
        <div className="flex justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${NoOneIMG})` }}>
        </div>
    )
}

export default Hero