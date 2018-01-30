export const platformReducer = (state = {
    isshow: false,
    flag: 0  /**0表示新增，1表示修改 ，2表示详情*/
}, action) => {
    switch (action.type) {
        case 'saveplatform':
            return {
                ...state,
                list: action.payload.Data.Collection,
                totalcount: action.payload.Data.TotalCount
            };
        case 'platformsearchtxt':
            return {
                ...state,
                searchtxt: action.payload
            };
        case 'platformselectid':
            return {
                ...state,
                selectids: action.payload
            };
        case 'platformpageinfo':
            return {
                ...state,
                pageindex: action.payload.pageindex,
                pagesize: action.payload.pagesize
            };
        case 'platformdelete':
            const list = state.list.filter(item => item.RecId !== action.payload);
            return {
                ...state,
                list: list
            };
        case 'platformshowdialog':
            return {
                ...state,
                isshow: action.payload.isshow,
                flag: action.payload.flag,
                dialogtitle: action.payload.dialogtitle,
            };
        case 'platformdetail':
            return {
                ...state,
                detail: action.payload.Data
            };
        case 'platformisview':
            return {
                ...state,
                flag: action.payload
            };
        default:
            return state;
    }
}
