import React, {useEffect} from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';

import {connect } from "react-redux";
import { fetchCollectionsStart } from '../../redux/collection/collection.action';
import CollectionsOverviewContainer from '../../components/collextions-overview/collections-overview.container';
import CollectionPageConatiner from '../collection/collection.container';


const ShopPage = ({fetchCollectionsStart, match})=>{
    
    useEffect(()=>{
        fetchCollectionsStart()
    }, [fetchCollectionsStart])



    return (
        <div className="shop-page">
            
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageConatiner} />
        </div>
    )
}
 



const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsStart: ()=>dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);