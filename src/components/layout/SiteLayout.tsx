import { Outlet } from "react-router";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from './Navbar';
import Footer from "./Footer";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

const SiteLayout = () => {
  return (
    <div className={cn("flex min-h-screen flex-col pb-16 md:pb-0", ui.page)}>
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
