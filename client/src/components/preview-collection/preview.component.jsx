import React from 'react';
import CollectionItem from "../../components/collection-item/collection-item.component";

import './preview.styles.scss';
import { Link } from 'react-router-dom';

const CollectionPreview = ({title, items}) =>(
    <div className="collection-preview">
        <Link className="title" to={`shop/${title.toLowerCase()}`}>{ title.toUpperCase() }</Link>
        <div className="preview">
            {
                items
                .filter((items, idx) => idx <4)
                .map((item) => (
                    <CollectionItem key={item.id} item = {item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;