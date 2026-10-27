import ProjectList from './projects-list/ProjectList';
import Slang from './projects-detail/Slang/Slang';
import './Projects.scss';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

function Projects() {

    return (
        <div className="projects">
            <Routes>
                <Route index element={<ProjectList/>}></Route>
                <Route path="slang" element={<Slang />} />
            </Routes>
        </div>
    )
}




export default Projects