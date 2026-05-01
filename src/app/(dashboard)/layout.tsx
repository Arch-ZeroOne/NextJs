// This component receives a children prop type ReactNode which is a compoennt that we can pass in every component
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Dashboard Root Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
