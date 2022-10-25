import {connect} from 'react-redux';
import {addData} from '../action'
import MilkProtienProducts from '../../components/Products/MilkProtienProducts/MilkProtienProducts';

const mapStateToProps = state =>({
    tData:state.enqItems
})


const mapDispatchToProps=dispatch=>({
    addItemHandler:data=>dispatch(addData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MilkProtienProducts)
