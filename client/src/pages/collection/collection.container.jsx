import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import {createStructuredSelector} from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/collection/collection.selector';

const mapToStateProps = createStructuredSelector({
    isLoading: (state)=>!selectIsCollectionLoaded(state)
})

const CollectionPageConatiner = connect(mapToStateProps)(WithSpinner(CollectionPage))

export default CollectionPageConatiner;