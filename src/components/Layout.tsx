// src/components/Layout.tsx
// import Footer from "./Footer";
import Navigation from "./Navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
