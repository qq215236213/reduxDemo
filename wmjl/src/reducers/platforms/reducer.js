export const platformReducer = (state = {
    isshow: false,
    isedit: false
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
                isedit: action.payload.isedit,
                dialogtitle: action.payload.dialogtitle
            };
        case 'platformdetail':
            return {
                ...state,
                detail: action.payload.Data
            };
        default:
            return state;
    }
}
