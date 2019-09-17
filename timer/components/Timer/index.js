import { connect } from 'react-redux'
import Timer from './presenter'
import { actionCreators } from '../../reducer'
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch){
    return{
        startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
        restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch),
        addSecond: bindActionCreators(actionCreators.addSecond, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);