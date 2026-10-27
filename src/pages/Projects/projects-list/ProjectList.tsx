import './ProjectList.scss';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

function ProjectList(){

    return (
        <>
            <h1 className="projectlist__title">list of projects</h1>
            <br></br>
            <ol className="projectlist__list"> 
                        <li className="projectlist__item">
                            <Link className="projectlist__link" to="/projects/slang">
                                <span className="projectlist__project-title">slang</span>
                                <br></br>
                                <p><b>main contribution:</b> we evaluated the effectiveness of llms in detecting slang in reddit conversations. we then used llms to analyze over 100 million reddit utterances and modelled how network and linguistic features influence slang adoption and diffusion among online users.</p>
                            </Link>
                        </li>
                        
                        {/* <br></br>
                        <li>
                            <span>project tilte</span>
                            <br></br>
                            <span>Here is the description of the project.</span>
                        </li> */}
            </ol>
        </>
    )
}

export default ProjectList
