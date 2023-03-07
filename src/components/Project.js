import style from "./project.module.css"

const Project = ({ name, description, git, link, image }) => {
    return (
        <div className="container" style={{
            backgroundImage: `url('${image}')`
        }}>
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
    )
}

export default Project;