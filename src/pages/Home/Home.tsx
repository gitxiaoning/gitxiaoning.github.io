import './Home.scss';
import uiuc from '../../assets/uiuc_i.svg';
import uoft from '../../assets/uoft_shield.svg';
import bluesky from '../../assets/bluesky.svg';
import googlescholar from '../../assets/google-scholar.svg';
import linkedin from '../../assets/linkedin.svg';
import huggingface from '../../assets/huggingface.svg'


function Home() {

    function openInNewWindow(url: string) {
        window.open(url, '_blank');
    }
    return (
        <>
            <h1 className="home__title">hi, i'm xiaoning!</h1>
            <div className="home__main">
                <p className="home__text">
                    welcome to my website :)
                    <br /> <br /> 
                    i am a phd student in information sciences at the university of illinois urbana-champaign
                    <img src={uiuc} onClick= {() => {openInNewWindow("https://ischool.illinois.edu/")}} className="home__uiuc" alt=" uiuc-icon "></img> 
                    advised by professor ted underwood
                    <br /> <br /> 
                    previously, i obtained my bachelor's degree from the university of toronto
                    <img src={uoft} onClick= {() => {openInNewWindow("https://web.cs.toronto.edu/")}} className="home__uoft" alt=" uoft-icon "></img>
                    in computer science 
                    <br /> <br />
                </p>


                <div className="home__links">
                    <hr className="home__seperator" / >
                    <div className="home__container">
                        <img src={bluesky} onClick= {() => {openInNewWindow("https://bsky.app/profile/xiaoningwang.ca")}} className="home__bluesky" alt="bluesky icon"></img>
                        <img src={googlescholar} onClick= {() => {openInNewWindow("https://scholar.google.com/citations?user=Wt1KbjUAAAAJ&hl")}} className="home__googlescholar" alt="google scholar icon"></img>
                        <img src={linkedin} onClick= {() => {openInNewWindow("https://www.linkedin.com/in/wangxiaoning/")}} className="home__linkedin" alt="linkedin icon"></img>
                        <img src={huggingface} onClick= {() => {openInNewWindow("https://huggingface.co/xiaoningwang")}} className="home__huggingface" alt="huggingface icon"></img>
                    </div>
                </div>
            </div>
        </>
    )

}




export default Home