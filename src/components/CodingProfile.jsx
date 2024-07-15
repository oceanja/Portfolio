import codingProfile from "./data/codingProfile.json";

const CodingProfile = () => {
  return (
    <div className="container skills" id="codingProfile">
      <h1 className="title">Coding Profiles</h1>
      <div className="items">
        {codingProfile.map((data) => (
          <div
            className="item"
            key={data.key} 
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <a href={data.source} target="_blank" rel="noopener noreferrer">
              <img src={`/assets/${data.imageSrc}`} alt={data.title} />
              <h3>{data.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfile;
