import Project from "../components/Project";
import data from "../data" ;
import fitnessImg from '../pages/fitness.png'
import movie from '../pages/movie.png'
import weather from '../pages/weather.png'
import workDay from '../pages/workDay.png'
import style from '../components/project.module.css'

const Portfolio =()=>{
    return (   
        <div>
            <h2>Portfolio</h2>
            <div className="projectContainer">
            
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
              image={movie}
              />

    

              <Project  
              name={data[2].title}
              git={data[2].git}
              link={data[2].link}
              image={weather}
              />

            

              <Project  
              name={data[3].title}
              git={data[3].git}
              link={data[3].link}
              image={workDay}
              />

            </div>
        </div>
            
    )
}

export default Portfolio;