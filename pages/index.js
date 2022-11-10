import StatusBar from "../components/StatusBar";
import Overview from "../components/Overview";
import SalesReport from "../components/SalesReport";


const Home = () => {
  return (
    <div className="bg-gray-100">
      <StatusBar />
      <Overview />
      <SalesReport />
    </div>
  )
}

export default Home
