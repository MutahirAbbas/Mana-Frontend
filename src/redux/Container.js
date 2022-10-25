import {connect} from 'react-redux';
import {addData, removeData} from './action'
import SkimMilk from '../components/Products/SkimMilk';

const mapStateToProps = state =>({
    tData:state.enqItems
})

const mapDispatchToProps=dispatch=>({
    addItemHandler:data=>dispatch(addData(data)),
    removeItemHandler:data=>dispatch(removeData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SkimMilk)
