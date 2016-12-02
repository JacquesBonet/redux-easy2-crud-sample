import BasketList from './BasketList';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {readProducts, deleteProduct} from '../../actions/products';
import { getProducts } from '../../services/products';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const dispatchAndMapActions = (dispatch) => {
  dispatch(readProducts());
  return bindActionCreators({deleteProduct}, dispatch);
};

export default connect(mapStateToProps, dispatchAndMapActions)(BasketList);
