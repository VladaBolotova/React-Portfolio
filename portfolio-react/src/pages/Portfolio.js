import Project from "../components/Project";
import data from "../data" ;

const Portfolio =()=>{
    return (
        <div >
            <h2>Portfolio</h2>
            <div className="project-container">
              <Project  
              name={data[0].title}
              description={data[0].description}
              git={data[0].git}
              link={data[0].link}
              image={data[0].image}
              />

              <Project />

            </div>
        </div>
    )
}

export default Portfolio;