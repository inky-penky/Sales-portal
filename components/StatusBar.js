import Image from "next/image"
import Link from "next/link"



const StatusBar = () => {
  return (
    <div className="bg-white w-full px-6 pt-4 pb-4">
        <div className="flex justify-between border-b-2 py-2 pb-6">
            <div className="flex w-full">
                <Image src="/search.svg" width={15} height={15} />
                <input type="text" placeholder="Search by order ID" className="outline-none ml-4 w-2/4" />
            </div>
            
            <div className="flex w-1/3 justify-between">
                <Image src="/notification.svg" width={20} height={20} />
                <Image src="/face.jpg" 
                width={30} height={30} className="rounded-full" />
                <Link href="">
                    <a className="">Ahmad Abdulazeez</a>
                </Link>
                <Link href=""><a><Image src="/arrow.svg" height={15} width={15} /></a></Link>
            </div>
        </div>

        <div className="mt-4 flex justify-between">
            <div className="flex">
                <div>
                    <Image src="/face.jpg" width={70} height={70} className="rounded-full" />
                </div>
                
                <div className="pl-4 mt-1 w-full">
                    <h2 className="text-xl"><b>Welcome</b> Emmanuel Lee</h2>
                    <div className="flex justify-between w-full text-sm" >
                        <span className="flex justify-between">
                            <Image src="/location.svg" width={15} height={15} />
                            <p className="ml-1">Ikeja, Lagos</p>
                        </span>
                        <span className="flex justify-between ml-2">
                            <Image src="/verified.svg" width={15} height={15} />
                            <p className="ml-1">Verified account</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center w-1/3">
                <input type="date" className="border-2 p-2 rounded-md wrap"></input>
                <p className="">-</p>
                <input type="date" className="border-2 p-2 rounded-md"></input>
            </div>
        </div>
    </div>
  )
}

export default StatusBar
