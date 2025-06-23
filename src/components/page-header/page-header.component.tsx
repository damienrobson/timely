import { useContext } from "react";
import { MediaContext } from "../../context";

const PageHeader = () => {
  const { isMobile } = useContext(MediaContext);

  return (
    <header className="page-header">
      <div className="page-header__logo">
        {!isMobile && <img src="/timely.png" alt="" height={"100px"} />}
        <h1>Timely</h1>
      </div>
      <p>Do More.</p>
    </header>
  );
};

export default PageHeader;
