import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>My Header</header>
      <main>{children}</main>
      <footer>My Footer</footer>
    </div>
  );
};

export default Layout;
