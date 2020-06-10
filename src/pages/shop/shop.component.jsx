import React from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/collection/collection.selector';
import CollectionsOverview from '../../components/collextions-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect } from "react-redux";
import { fetchCollectionsStartAsync } from '../../redux/collection/collection.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWIthSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    
    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync()
    }

    render(){
        const {match, isCollectionFetching, isCollectionLoaded} = this.props;
        return (
            <div className="shop-page">
                
                <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWIthSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);