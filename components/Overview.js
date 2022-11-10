import Link from "next/link";


const Overview = () => {
    return (
        <div className="p-6 text-xl">
            <h2 className="text-gray-600">Overview</h2>
            <div className="flex gap-5 mt-4">
                <div className="bg-white h-full w-full rounded-md">
                    <p className="text-sm text-gray-400 font-semibold m-6 mb-3">Total Order</p>
                    <p className="font-medium m-6 -mt-1">3,000 Units</p>
                    <Link href=""><a className="text-xs text-blue-600 font-semibold bg-gray-50 block p-3 pl-6">View all</a></Link>
                </div>
                <div className="bg-white h-full w-full rounded-md">
                    <p className="text-sm text-gray-400 font-semibold m-6 mb-3">Pending Order</p>
                    <p className="font-medium m-6 -mt-1">1,500</p>
                    <Link href=""><a className="text-xs text-blue-600 font-semibold block p-3 pl-6 bg-gray-50">View all</a></Link>
                </div>
                <div className="bg-white h-full w-full rounded-md">
                    <p className="text-sm text-gray-400 font-semibold m-6 mb-3">New users (Last 30 days)</p>
                    <p className="font-medium m-6 -mt-1">7,000</p>
                    <Link href=""><a className="text-xs text-blue-600 font-semibold block p-3 pl-6 bg-gray-50">View all</a></Link>
                </div>
            </div>
        </div>
    )
}


export default Overview