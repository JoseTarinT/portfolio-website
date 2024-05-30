import "./index.css";

export const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <h4 className="githab-link">
            <a
              href="https://github.com/JoseTarinT/protected-beaches"
              target="_blank"
            >
              Protected Beaches-Frontend
            </a>
          </h4>
          <h4 className="githab-link">
            <a href="https://github.com/JoseTarinT/Backend" target="_blank">
              Protected Beaches-Backend
            </a>
          </h4>
          <p className="description"></p>
        </div>
        <div className="project">
          <h4 className="githab-link"></h4>
          <p className="description"></p>
        </div>
        <div className="project">
          <h4 className="githab-link"></h4>
          <p className="description"></p>
        </div>
      </div>
    </>
  );
};
