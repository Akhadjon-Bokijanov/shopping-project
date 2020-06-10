import React from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';

import {connect } from "react-redux";
import { fetchCollectionsStartAsync } from '../../redux/collection/collection.action';
import CollectionsOverviewContainer from '../../components/collextions-overview/collections-overview.container';
import CollectionPageConatiner from '../collection/collection.container';


class ShopPage extends React.Component{
    
    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync()
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
    fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);