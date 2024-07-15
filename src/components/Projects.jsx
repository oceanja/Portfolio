import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 style={{color:"#42CAFD"}}>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-2"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "100%",
                  border: "1px solid #45A296",
                  boxShadow: "5px 5px 10px rgba(69, 162, 150, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "250px",
                      border: "2px solid #45A296",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary mx-1">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-1">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
