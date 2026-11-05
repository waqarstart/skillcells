import { Outlet } from "react-router";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from './Navbar';
import Footer from "./Footer";

const SiteLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="w-full flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default SiteLayout
