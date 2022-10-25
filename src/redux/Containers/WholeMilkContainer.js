import {connect} from 'react-redux';
import {addData} from '../action'
import WholeMilk from '../../components/Products/WholeMilk';

const mapStateToProps = state =>({
    tData:state.enqItems
})


const mapDispatchToProps=dispatch=>({
    addItemHandler:data=>dispatch(addData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(WholeMilk)
