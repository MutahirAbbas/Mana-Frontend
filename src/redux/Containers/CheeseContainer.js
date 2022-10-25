import {connect} from 'react-redux';
import {addData} from '../action'
import CheeseVariants from '../../components/Products/Cheese/CheeseVariants';

const mapStateToProps = state =>({
    tData:state.enqItems
})


const mapDispatchToProps=dispatch=>({
    addItemHandler:data=>dispatch(addData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheeseVariants)
