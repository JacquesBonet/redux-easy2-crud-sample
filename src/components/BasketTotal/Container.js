import BasketTotal from "./Component";
import {connect} from "react-redux";
import {getTotal, getProducts} from "../../services/products";

const mapStateToProps = (state) => ({
  total: getTotal(getProducts(state))
});

export default connect(mapStateToProps)(BasketTotal);
