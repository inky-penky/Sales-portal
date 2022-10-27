import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
    return (
        <div className="bg-blue-700 h-screen w-1/5 float-left text-white">
            <div className="flex mx-4 my-6">
                <Image src="/icons8.png" width={40} height={40} className="" />
                <h2 className="text-2xl font-semibold mx-4 mt-1">Xen</h2>
            </div>

            <nav>
                <div className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex">
                    <Image src="/dashboard.svg" width={15} height={15} />
                    <Link href="/" >Dashboard</Link>
                </div>
                <div className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex">
                    <Image src="/list.svg" width={15} height={15} />
                    <Link href="/orders" >Orders</Link>
                </div>
                <div className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex">
                    <Image src="/cart.svg" width={20} height={20} />
                    <Link href="/shippings" >Shippings</Link>
                </div>
                <div className="p-4 hover:bg-blue-800 w-60 ml-4 rounded flex">
                    <Image src="/support.svg" width={17} height={17} />
                    <Link href="/support" >Support</Link>
                </div>
                <div className="p-4 hover:bg-blue-800 w-60 ml-4 mt-10 rounded flex">
                    <Image src="/settings.svg" width={15} height={15} />
                    <Link href="/settings" >Settings</Link>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
