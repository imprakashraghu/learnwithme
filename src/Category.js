import React from 'react';
import { useParams, useHistory } from 'react-router';
import './Category.css';
import { useDataLayerValue } from './DataLayer';
import Card from './Card';
import Footer from './Footer';

function Category() {

    let { key } = useParams();
    let history = useHistory();

    const [{ categories }] = useDataLayerValue();

    const category = categories?.filter(item => item?.key === key)[0] || [];
    const modules = categories?.filter(item => item?.key === key)[0]?.modules || [];

    const handleCard = (key, modules=null) => {
        if (modules) {
            history.push(`/subcategory/${category?.key}/${key}`);
        } else history.push(`/module/${key}`);
    }

    return (
        <div className="category">
            <h1 onClick={() => history.push("/")}>Cratable</h1>
            <p className="beta__flag">i'm beta version</p>
            <h2>Category: <strong>{category?.title}</strong></h2>
            <div className="category__body">
            {
                modules?.map(({ id, title, key, description, modules }) => (
                    <Card
                        id={id}
                        header={title}
                        meta={description}
                        onClick={() => handleCard(key, modules)}
                    />
                ))
            }
            </div>
            <Footer />
        </div>
    )
}

export default Category
