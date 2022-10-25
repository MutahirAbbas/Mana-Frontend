import {connect} from 'react-redux';
import {removeData} from '../action'
import Enquire from '../../components/Enquiry/Enquire';

const mapStateToProps = state =>({
    tData:state.enqItems
})


const mapDispatchToProps=dispatch=>({
    removeItemHandler:data=>dispatch(removeData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Enquire)
