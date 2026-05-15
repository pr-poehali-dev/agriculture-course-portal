import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CoursesPage from "@/pages/CoursesPage";
import CourseDetailPage from "@/pages/CourseDetailPage";
import ContactsPage from "@/pages/ContactsPage";
import { type Category, type Course } from "@/data/courses";

type Page = "home" | "courses" | "category" | "courseDetail" | "contacts";

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [pageData, setPageData] = useState<unknown>(null);

  const handleNavigate = (page: string, data?: unknown) => {
    setCurrentPage(page as Page);
    setPageData(data ?? null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "courses":
        return <CoursesPage onNavigate={handleNavigate} />;
      case "category":
        return (
          <CoursesPage
            onNavigate={handleNavigate}
            initialCategory={pageData as Category}
          />
        );
      case "courseDetail":
        return (
          <CourseDetailPage
            course={pageData as Course}
            onNavigate={handleNavigate}
          />
        );
      case "contacts":
        return <ContactsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
