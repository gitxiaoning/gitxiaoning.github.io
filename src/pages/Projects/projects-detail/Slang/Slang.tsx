import './Slang.scss';
import huggingface from '../../../../assets/huggingface.svg';
import arxiv from '../../../../assets/arxiv.png';
import github from '../../../../assets/github.png';

function Slang() {

    return (
        <article className="slang">
            <h1 className='slang__title'>slang</h1>
            <nav className="slang__resources" aria-label="Paper and project resources">
                <a href="https://arxiv.org/abs/2609.25669" target="_blank" rel="noopener noreferrer">
                    <img className="slang__resource-icon slang__resource-icon--arxiv" src={arxiv} alt="arxiv logo" />
                    <span>paper</span>
                </a>
                <a href="https://huggingface.co/datasets/xiaoningwang/reddit-community-word-sense-benchmark" target="_blank" rel="noopener noreferrer">
                    <img className="slang__resource-icon slang__resource-icon--huggingface" src={huggingface} alt="huggingface logo" />
                    <span>benchmark</span>
                </a>
                <a href="https://github.com/gitxiaoning/slang-adoption-diffusion" target="_blank" rel="noopener noreferrer">
                    <img className="slang__resource-icon slang__resource-icon--github" src={github} alt="github logo" />
                    <span>analysis code</span>
                </a>
                <a href="https://huggingface.co/datasets/xiaoningwang/reddit-slang-detection-gemma-4-e4b-it/tree/main" target="_blank" rel="noopener noreferrer">
                    <img className="slang__resource-icon slang__resource-icon--huggingface" src={huggingface} alt="huggingface logo" />
                    <span>gemma 4 detections</span>
                </a>
            </nav>
            <p>
                we study how slang spreads across online communities and how quickly
                individual users adopt it, using roughly 100 million reddit utterances.
            </p>

            <section className="slang__section">
                <h2 className="slang__heading">benchmark</h2>
                <p>
                    we built a benchmark of 1,333 human-annotated utterances from 23
                    subreddits to evaluate whether llms can distinguish slang from
                    ordinary word usage. single-wsd tests one candidate term;
                    list-wsd identifies all slang usages from a community glossary.
                </p>
                <div className="slang__table-scroll" role="region" aria-label="Benchmark results" tabIndex={0}>
                    <table className="slang__table">
                        <caption>slang detection performance (f1, %)</caption>
                        <thead>
                            <tr>
                                <th scope="col">model</th>
                                <th scope="col">single-wsd</th>
                                <th scope="col">list-wsd</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Llama-3.1-8B-Instruct</th><td>86.55</td><td>63.19</td></tr>
                            <tr><th scope="row">Ministral-3-8B-Instruct-2512</th><td>90.36</td><td>82.10</td></tr>
                            <tr><th scope="row">OLMo-3-7B-Instruct</th><td>83.78</td><td>70.59</td></tr>
                            <tr><th scope="row">Gemma-4-E4B-it</th><td><strong>93.44</strong></td><td><strong>83.98</strong></td></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    gemma performed best on both tasks. we used it to detect usages
                    of 3,965 slang terms across 54 subreddits.
                </p>
            </section>

            <section className="slang__section">
                <h2 className="slang__heading">main findings</h2>
                <p>
                    <strong>slang diffusion:</strong> a fixed-effects model found
                    more new adopters when a term’s users bridged groups, but fewer
                    when users were densely connected or the term appeared in more
                    diverse contexts.
                </p>
                <p>
                    <strong>individual adoption:</strong> survival analysis found
                    that highly connected users adopted slang faster, while users
                    bridging groups adopted more slowly. varied semantic contexts
                    predicted faster adoption, whereas use across more topics
                    predicted slower adoption.
                </p>
                <div className="slang__table-scroll" role="region" aria-label="Findings from both analyses" tabIndex={0}>
                    <table className="slang__table">
                        <caption>associations in the two analyses</caption>
                        <thead>
                            <tr>
                                <th scope="col">higher feature value</th>
                                <th scope="col">new adopters of a term</th>
                                <th scope="col">individual adoption</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">degree centrality (local connections)</th><td>fewer</td><td>faster</td></tr>
                            <tr><th scope="row">betweenness centrality (bridging groups)</th><td>more</td><td>slower</td></tr>
                            <tr><th scope="row">semantic dispersion (context variation)</th><td>fewer</td><td>faster</td></tr>
                            <tr><th scope="row">effective topics (topic breadth)</th><td>fewer</td><td>slower</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="slang__note">
                    the diffusion model uses features aggregated over a term’s users;
                    the adoption model measures time from first encounter to first use.
                </p>
            </section>
        </article>
    )

}

export default Slang
