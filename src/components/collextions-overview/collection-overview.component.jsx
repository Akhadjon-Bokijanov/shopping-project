import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import  {selectCollectionsForPreview} from '../../redux/collection/collection.selector';
import CollectionPreview from '../preview-collection/preview.component';
import './collections-overview.styles.scss';

const CollectionsOverView = ({collection})=>(
    <div className="collection-overview">
        {
            collection.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview,

})
export default connect(mapStateToProps)(CollectionsOverView)