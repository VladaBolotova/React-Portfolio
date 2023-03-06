import style from "./project.module.css"

const Project =({name,description, git, link, image})=>{
    return (
        <div className={style.container} style={{ backgroundImage: `url('${image}')`, width: '20%', height: '20%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', 
        alignItems: 'center', padding: '10px', margin: '10px', marginLeft: '30%'}}>
           
                <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <ul>
                        <li>
                            <a href={git}>git</a>
                        </li>
                        <li>
                            <a href={link}>live</a>
                        </li>
                        
                        </ul>
                </div>
            
        </div>
    )
}

export default Project;