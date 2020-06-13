import React from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';

import {connect } from "react-redux";
import { fetchCollectionsStart } from '../../redux/collection/collection.action';
import CollectionsOverviewContainer from '../../components/collextions-overview/collections-overview.container';
import CollectionPageConatiner from '../collection/collection.container';


class ShopPage extends React.Component{
    
    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
    }

    render(){
        const {match} = this.props;
        return (
            <div className="shop-page">
                
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageConatiner} />
            </div>
        )
    }
} 



const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsStart: ()=>dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);