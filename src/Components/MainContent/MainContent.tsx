import NavHeader from "./NavHeader/NavHeader";
import Story from "./Story/Story";

const MainContent = () => {
  return (
    <>
      <NavHeader />
      <div className="mainContentWrapper">
        <Story />
      </div>
    </>
  );
};

export default MainContent;
