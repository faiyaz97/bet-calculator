import React from "react";
import { GlobalContextProvider } from "@/app/Context/store";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>My Header</header>
      <main>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </main>
      <footer>My Footer</footer>
    </div>
  );
};

export default Layout;
