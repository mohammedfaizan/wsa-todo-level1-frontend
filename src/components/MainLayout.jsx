import CopyrightNotice from "./Copyright.jsx";
import Header from "./Header";

// A higher order component to impose common layout to all the screens
const MainLayout = ({ showHeader = true, children }) => {
  return (
    <div className="layout-container-div">
      {showHeader && <Header />}
      {children}
      <CopyrightNotice />
    </div>
  );
};

export default MainLayout;
