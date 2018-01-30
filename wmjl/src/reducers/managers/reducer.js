export const managerReducer = (state = {
    selectedids: [],
    isshow: false,
    isedit: false
}, action) => {
    switch (action.type) {
        case 'managerload':
            return {
                ...state,
                list: action.payload.Data.Collection,
                totalcount: action.payload.Data.TotalCount,
                pageindex: action.payload.Data.PageIndex,
                pagesize: action.payload.Data.PageSize
            };
        case 'managerselectedids':
            return {
                ...state,
                selectedids: action.payload
            };
        case 'managersavesearchtxt':
            return {
                ...state,
                searchtxt: action.payload
            };
        case 'managedialog':
            return {
                ...state,
                isshow: action.payload.isshow,
                isedit: action.payload.isedit,
                dialogtitle: action.payload.dialogtitle
            };
        case 'managedetail':
            console.log(action.payload.Data)
            return {
                ...state,
                detail: action.payload.Data
            };
        default:
            return state;
    }
}
