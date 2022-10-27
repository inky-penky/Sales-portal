import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
    return (
        <div className="bg-blue-700 h-screen w-full text-white">
            <div className="flex mx-4 my-6">
                <Image src="/icons8.png" width={40} height={40} className="" />
                <h2 className="text-2xl font-semibold mx-4 mt-1">Xen</h2>
            </div>

            <nav>
                <Link href="/" >
                    <a className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex gap-10">
                        <Image src="/dashboard.svg" width={15} height={15} />
                        <span>Dashboard</span>
                    </a>
                </Link>
                <Link href="/" >
                    <a className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex gap-10">
                        <Image src="/list.svg" width={15} height={15} />
                        <span>Orders</span>
                    </a>
                </Link>
                <Link href="/" >
                    <a className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex gap-10">
                        <Image src="/cart.svg" width={20} height={20} />
                        <span>Shippings</span>
                    </a>
                </Link>
                <Link href="/" >
                    <a className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex gap-10">
                        <Image src="/support.svg" width={17} height={17} />
                        <span>Support</span>
                    </a>
                </Link>
                <Link href="/" >
                    <a className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex gap-10">
                        <Image src="/settings.svg" width={15} height={15} />
                        <span>Settings</span>
                    </a>
                </Link>
            </nav>


        </div>
    )
}

export default Navbar
