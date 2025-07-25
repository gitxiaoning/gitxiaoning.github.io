import './App.scss'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import uiuc from './assets/uiuc_i.svg';
import uoft from './assets/uoft_shield.svg';
import bluesky from './assets/bluesky.svg';
import googlescholar from './assets/google-scholar.svg';
import linkedin from './assets/linkedin.svg';

function App() {

  function openInNewWindow(url: string) {
    window.open(url, '_blank');
  }

  return (
    <div className="app">

      <div className="main-view">
        <div className="main-view__sidebar">
          <ul className="main-view__sidebar-list">
            <li className="main-view__sidebar-item">home</li>
            <li className="main-view__sidebar-item">about</li>
            <li className="main-view__sidebar-item">research</li>
            <li className="main-view__sidebar-item">publications</li>
            {/* <div>side projects</div> */}
          </ul>
        </div>

        <div className="main-view__content">

          <h1 className="main-view__content-title">hi! i'm xiaoning!</h1>
          
          <div className="main-view__content-main">
            <p className="main-view__content-text">
              welcome to my personal website :)
              <br /> <br /> 
              i am a phd student in information sciences at the university of illinois urbana-champaign
              <img src={uiuc} onClick= {() => {openInNewWindow("https://ischool.illinois.edu/")}} className="main-view__content-uiuc" alt=" uiuc-icon "></img> 
              advised by professor ted underwood
              <br /> <br /> 
              previously, i obtained my bachelor's degree from the university of toronto
              <img src={uoft} onClick= {() => {openInNewWindow("https://web.cs.toronto.edu/")}} className="main-view__content-uoft" alt=" uoft-icon "></img>
              in computer science 
              <br /> <br />
            </p>

            <div className="main-view__content-links">
              <hr className="main-view__content-seperator" / >
              <div className="main-view__content-container">
                <img src={bluesky} onClick= {() => {openInNewWindow("https://bsky.app/profile/xiaoningwang.ca")}} className="main-view__content-bluesky" alt="bluesky icon"></img>
                <img src={googlescholar} onClick= {() => {openInNewWindow("https://scholar.google.com/citations?user=Wt1KbjUAAAAJ&hl")}} className="main-view__content-googlescholar" alt="google scholar icon"></img>
                <img src={linkedin} onClick= {() => {openInNewWindow("https://www.linkedin.com/in/wangxiaoning/")}} className="main-view__content-linkedin" alt="linkedin icon"></img>
              </div>
              
            </div>
            
          </div>
        </div>

      </div>
    </div>


  )
}

export default App
