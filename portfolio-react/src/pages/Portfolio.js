import Project from "../components/Project";
import data from "../data" ;
import fitnessImg from '../pages/fitness.png'
const Portfolio =()=>{
    return (
        <div >
            <h2>Portfolio</h2>
            <div className="project-container">
              <Project  
              name={data[0].title}
              git={data[0].git}
              link={data[0].link}
              image={fitnessImg}
              />


              <Project  
              name={data[1].title}
              git={data[1].git}
              link={data[1].link}
              image={data[1].image}
              />

    

              <Project  
              name={data[2].title}
              git={data[2].git}
              link={data[2].link}
              image={data[2].image}
              />

            

              <Project  
              name={data[3].title}
              git={data[3].git}
              link={data[3].link}
              image={data[3].image}
              />

            </div>
        </div>
    )
}

export default Portfolio;