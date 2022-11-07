import Link from "next/link";


const Overview = () => {
    return (
        <div className="p-6 text-xl">
            <h2 className="text-gray-600">Overview</h2>
            <div className="flex gap-5 mt-4">
                <div className="bg-white h-full w-full p-6 rounded-md">
                    <p className="text-sm text-gray-400 font-semibold">Total Order</p>
                    <p className="font-medium pt-3">3,000 Units</p>
                    <Link href=""><a className="text-xs text-blue-600">View all</a></Link>
                </div>
                <div className="bg-white h-full w-full p-6 rounded-md">
                    <p className="text-sm text-gray-400 font-semibold">Pending Order</p>
                    <p className="font-medium pt-3">1,500</p>
                    <Link href=""><a className="text-xs text-blue-600">View all</a></Link>
                </div>
                <div className="bg-white h-full w-full p-6 rounded-md">
                    <p className="text-sm text-gray-400 font-semibold">New users (Last 30 days)</p>
                    <p className="font-medium pt-3">7,000</p>
                    <Link href=""><a className="text-xs text-blue-600">View all</a></Link>
                </div>
            </div>
        </div>
    )
}


export default Overview