export const Navigation = ({ currentPage, navigate }) => (
    <div className="navigation">
      <button onClick={() => navigate("prev")} disabled={currentPage === 1} className="navButton">
        &lt;
      </button>
      <span className="navStatus"> {currentPage} of 4</span>
      <button onClick={() => navigate("next")} disabled={currentPage === 4} className="navButton">
        &gt;
      </button>
    </div>
  );
  