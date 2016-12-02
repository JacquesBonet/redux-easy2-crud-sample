import ProductSelection from "./Component";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productsActions from "../../actions/products";

const mapDispatchToProps = (dispatch) => ({
  productsActions: bindActionCreators(productsActions, dispatch)
});

export default connect(null, mapDispatchToProps)(ProductSelection);
