import { PageFooter, PageHeader, PageMain, PageNav } from "./components";
import { MediaContextProvider } from "./context";

function App() {
  return (
    <MediaContextProvider>
      <PageHeader />
      <PageNav />
      <PageMain />
      <PageFooter />
    </MediaContextProvider>
  );
}

export default App;
