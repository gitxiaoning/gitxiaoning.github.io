import './Publications.scss';

function Publications() {

    return (
        <>
            <h1 className='publications__title'>publications</h1>
            <br></br>

            {/* 2026 publications */}
            <div>
                <h2 className='publications__title'>2026</h2>
                <ul className="publications__list">
                    <li>
                        <a className="publications__paper" href="https://arxiv.org/abs/2609.25669">
                            <b>Xiaoning Wang</b>, Ted Underwood, and Zhewei Sun. "<span className="publications__paper-title">From Utterances to Networks: Modelling Slang Adoption and Diffusion Across Subreddits</span>". In EMNLP 2026.
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a className="publications__paper" href="https://aclanthology.org/2026.findings-acl.2087/">
                            Pardis Sadat Zahraei, <b>Xiaoning Wang</b>, Nimet Beyza Bozdag, Gokhan Tur, and Dilek Hakkani-Tür. "<span className="publications__paper-title">Prior Beliefs Prejudice LLM-as-Judge: Evidence from Persuasion Evaluation</span>". In Findings of ACL 2026.
                        </a>
                    </li>
                </ul>

                <br></br>
                <h2 className='publications__title'>2024</h2>
                <ul className="publications__list">
                    <li>
                        <a className="publications__paper" href="https://dl.acm.org/doi/full/10.1145/3613904.3642773">
                            Majeed Kazemitabaar, Runlong Ye, <b>Xiaoning Wang</b>, Austin Zachary Henley, Paul Denny, Michelle Craig, Tovi Grossman. "<span className="publications__paper-title">CodeAid: Evaluating a Classroom Deployment of an LLM-based Programming Assistant that Balances Student and Educator Needs</span>". In CHI 2024.
                        </a>
                    </li>
                </ul>

            </div>
            

        </>
    )
}




export default Publications
