import React from 'react';
import './Home.css';
import { useDataLayerValue } from './DataLayer';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import Card from './Card';

function Home() {

    let history = useHistory();

    const [{ categories }] = useDataLayerValue();

    const handleCard = (key) => {
        history.push(`/category/${key}`);
    }

    return (
        <div className="home">
            <h1 onClick={() => history.push("/")}>Cratable</h1>
            <p className="beta__flag">i'm beta version</p>
            <h2>Breaking the barriers to learn 🚀</h2>
            {
                !categories?.length && (
                    <p style={{ textAlign: 'center', width: '100%' }}>please wait ...</p>
                )
            }
            <div className="home__body">
                {
                    categories?.map(({ id, title, key, description }) => (
                        <Card
                            id={id}
                            onClick={() => handleCard(key)}
                            header={title}
                            meta={description}
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home
