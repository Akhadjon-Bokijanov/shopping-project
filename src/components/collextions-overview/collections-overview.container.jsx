import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectIsCollectionFetching} from '../../redux/collection/collection.selector';
import CollectionsOverview from '../collextions-overview/collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapToStateProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = connect(mapToStateProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;