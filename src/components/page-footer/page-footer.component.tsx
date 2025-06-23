const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__container">
        <p>&copy; {new Date().getFullYear()} Timely. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PageFooter;
