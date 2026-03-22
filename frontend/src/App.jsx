// src/App.jsx
import { useState } from "react";
import { useRouter } from "./hooks/useRouter";
import { TOOLS } from "./data/tools";

import StatsBar from "./components/StatsBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";
import ToolPage from "./pages/ToolPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const { path, navigate } = useRouter();
  const [conversionCount] = useState(
    () => 47382 + Math.floor(Math.random() * 1000)
  );

  const renderPage = () => {
    if (path === "/" || path === "") {
      return <HomePage navigate={navigate} />;
    }

    if (path === "/tools" || path.startsWith("/tools/cat/")) {
      const cat = path.startsWith("/tools/cat/") ? path.split("/tools/cat/")[1] : "all";
      return <ToolsPage navigate={navigate} initialCategory={cat} />;
    }

    if (path.startsWith("/tool/")) {
      const toolId = path.slice(6);
      if (TOOLS[toolId]) {
        return <ToolPage key={toolId} toolId={toolId} navigate={navigate} />;
      }
    }

    return <NotFoundPage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased">
      <StatsBar count={conversionCount} />
      <Header navigate={navigate} currentPath={path} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
