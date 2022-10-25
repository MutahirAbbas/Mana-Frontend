import {connect} from 'react-redux';
import {addData} from '../action'
import Fatvariants from '../../components/Products/FatFilled/Fatvariants';
import FatFilled from '../../components/Products/FatFilled';

const mapStateToProps = state =>({
    tData:state.enqItems
})


const mapDispatchToProps=dispatch=>({
    addItemHandler:data=>dispatch(addData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FatFilled)
