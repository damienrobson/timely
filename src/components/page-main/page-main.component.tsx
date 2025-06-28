import { Routes, Route } from "react-router";
import { DashboardPage, TasksPage, TodosPage } from "../../pages";

const PageMain = () => {
  return (
    <main id="main" className="page-main">
      <article className="page-main__content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </article>
    </main>
  );
};

export default PageMain;
