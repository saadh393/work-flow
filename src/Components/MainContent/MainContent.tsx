import NavHeader from "./NavHeader/NavHeader";
import Story from "./Story/Story";
import Todos from "./Todos/Todos";

const MainContent = () => {
  return (
    <>
      <NavHeader />
      <div className="mainContentWrapper">
        <Story />
        <Todos />
      </div>
    </>
  );
};

export default MainContent;
