import SiteLayout from "@/components/layout/SiteLayout";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Courses from "@/pages/Courses";
import CourseDetail from "@/components/layout/CourseDetail";
import Fee from "@/pages/ClassSchedule";
import IndustryExperts from "@/pages/IndustryExperts";
import HomePage from "@/pages/HomePage";
import { Route, Routes } from "react-router";


const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<SiteLayout />}>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutUs />} />
           <Route path="/courses" element={<Courses />} />
           <Route path="/courses/:slug" element={<CourseDetail />} />
           <Route path="/class-schedule" element={<Fee />} />
           <Route path="/industry-experts" element={<IndustryExperts />} />
           <Route path="/contact" element={<ContactUs />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
