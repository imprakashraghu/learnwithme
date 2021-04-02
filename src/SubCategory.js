import React from 'react';
import './Category.css';
import { useDataLayerValue } from './DataLayer';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function SubCategory() {

    let { category, key } = useParams();
    let history = useHistory();

    const [{ categories }] = useDataLayerValue();

    const topCategory = categories?.filter(item => item?.key === category)[0] || [];
    const subCategory = topCategory?.modules?.filter(item => item?.key === key)[0] || null;
    const modules = subCategory?.modules || [];

    return (
        <div className="category">
            <h1 onClick={() => history.push("/")}>Cratable</h1>
            <p className="beta__flag">i'm beta version</p>
            <h2>Category: <strong>{subCategory?.title}</strong></h2>
            <div className="category__sub">
                {
                    modules?.map(({ id, title, key }) => (
                        <Link
                            to={`/module/${key}`}
                            key={id}
                        >{title}</Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default SubCategory
