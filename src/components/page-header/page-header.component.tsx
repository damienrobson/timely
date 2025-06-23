import { use } from "react";
import { MediaContext } from "../../context";

const PageHeader = () => {
  const { isMobile } = use(MediaContext);

  return (
    <header className="page-header">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="page-header__content ">
        <div className="page-header__logo">
          {!isMobile && <img src="/timely.png" alt="" height={"100px"} />}
          <h1>Timely</h1>
        </div>
        <p>Do More.</p>
      </div>
    </header>
  );
};

export default PageHeader;
