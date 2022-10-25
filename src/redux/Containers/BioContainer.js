import {connect} from 'react-redux';
import {addData} from '../action'
import Form from '../../components/Form/Form';

const mapStateToProps = state =>({
    tData:state.enqItems
})


const mapDispatchToProps=dispatch=>({
    addItemHandler:data=>dispatch(addData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
