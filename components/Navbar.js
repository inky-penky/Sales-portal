import Image from "next/image"

const Navbar = () => {
    return (
        <div className="bg-blue-600 h-screen w-1/5">
            <nav>
                <Image src="/public/logo.jpeg" width={128} height={77} />
            </nav>
        </div>
    )
}

export default Navbar
