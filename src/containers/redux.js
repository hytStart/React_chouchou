// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../action/index.js'

import ReduxComponent from '../components/home/redux/index.js'
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
      pageTitle: state.pageTitle,
      infoList: state.infoList
    }
    // return state 也行
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        },
        setInfoList (data) {
            dispatch(setInfoList(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent)