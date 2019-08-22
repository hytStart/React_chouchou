import { combineReducers } from 'redux'
import { Modal } from 'antd'

const errorModal = parma => (
    Modal.error({
        title: parma,
    })
)

// 声明默认值
// 同步数据：pageTitle
// 异步数据：infoList（将来用异步接口获取）
const defaultState = {
    pageTitle: '首页',
    infoList: []
}

function pageTitle (state = defaultState.pageTitle, action) {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return action.data
        default:
            return state
    }
}
  
function infoList (state = defaultState.infoList, action) {
    switch (action.type) {
        case 'SET_INFO_LIST':
            const {
                infoList,
            } = action.data
            return infoList
        case 'SET_INFO_LIST_FAILED':
            errorModal(action.e)
            return state
        default:
            return state
    }
}
  
// 导出所有reducer
export default combineReducers({
      pageTitle,
      infoList
})