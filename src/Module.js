import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import './Module.css';
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Module() {

    let { key } = useParams();
    let history = useHistory();
    const [module, setModule] = useState(null);

    const [{ modules }] = useDataLayerValue();

    useEffect(() => {
        let currentModule = modules?.filter(item => item.key === key)[0] || false;
        if (modules?.length) {
            if (currentModule) {
                setModule(currentModule);
                document.body.scrollTop = 0; // Safari
                document.documentElement.scrollTop = 0; // Chrome
            } else {
                history.push("/404");
            }
        }
        // eslint-disable-next-line
    },[modules, key]);

    return (
        <div className="module">
            <h1 onClick={() => history.push("/")}>Learn With Me</h1>
            <p className={key==='ui'?"exclusive":"beta__flag"}>{key==='ui'?'exclusive module just for you 🙈':'i am beta version'}</p>
            <h2>Module: <strong>{module?.title}</strong></h2>
            <h3>{module?.description}</h3>
            <br/>
            <div className="module__body">
                <p>- Sub Modules: {!module?.subModules?.length && <span>None</span>}</p>
                <div className="module__bodyContainer">
                    {
                        module?.subModules?.map(({ title, key }) => (
                            <Link
                                to={`/module/${key}`}
                            >{title}
                            </Link>
                        ))
                    }
                </div>
                <p>- Need to Download: {!module?.download?.length && <span>None</span>}</p>
                <div className="module__bodyContainer">
                    {
                        module?.download?.map(({ title, url }) => (
                            <a rel="noreferrer" key={title} target="_blank" href={url}>{title}</a>
                        ))
                    }
                </div>
                <p>- Required Knowledge: {!module?.knowledge?.length && <span>None</span>}</p>
                <div className="module__bodyContainer">
                    {
                        module?.knowledge?.map(({ title, url, key='' }) => (
                            url ? (
                                <a rel="noreferrer" key={title} target="_blank" href={url}>{title}</a>
                            ) : (
                                <Link
                                    to={`/module/${key}`}
                                >{title}</Link>
                            )
                        ))
                    }
                </div>
                <p>- Tutorials:</p>
                <div className="module__bodyContainer">
                    <p>Blog Based: {!module?.tutorials?.blogs?.length && <span>None</span>}</p>
                    <div className="module__bodyContainer">
                        {
                            module?.tutorials?.blogs?.map(item => <a rel="noreferrer" href={item} target="_blank">{item}</a>)
                        }
                    </div>
                    <p>Video Based: {!module?.tutorials?.youtube?.length && <span>None</span>}</p>
                    <div className="module__bodyContainer">
                        {
                            module?.tutorials?.youtube?.map(item => <a rel="noreferrer" href={item} target="_blank">{item}</a>)
                        }
                    </div>
                    <p>Course Based: {!module?.tutorials?.udemy?.length && <span>None</span>}</p>
                    <div className="module__bodyContainer">
                        {
                            module?.tutorials?.udemy?.map(item => <a rel="noreferrer" href={item} target="_blank">{item}</a>)
                        }
                    </div>
                </div>
                <p>- Steps to follow: {!module?.steps?.length && <span>None</span>}</p>
                <div className="module__bodyContainer">
                    <ul>
                    {
                        module?.steps?.map(({ title, url, key }) => (
                            url ? (
                                <li key={title}><a rel="noreferrer" target="_blank" href={url}>{title}</a></li>
                            ) : key ? (
                                <li key={title}><Link to={`/module/${key}`}>{title}</Link></li>
                            ) : (
                                <li key={title}>{title}</li>
                            )
                        ))
                    }
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Module