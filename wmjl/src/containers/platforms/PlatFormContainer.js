import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableDiv from '../../components/TableDiv';
import SearchDiv from '../../components/SearchDiv';
import ActionButtonDiv from '../../components/ActionButtonDiv';
import {loadDataAction,
        deleteDataAction,
        showDialogAction,
        addDataAction,
        getSingleAction,
        updataDataAction,
        viewDetailAction} from '../../actions/platforms/actions';
import {datefmt} from '../../libs/datefmt';
import {tipMsg} from '../../libs/confirm';
import Add from './Add';
import Mod from './Mod';
import Detial from './Detail';

class PlatFormContainer extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    saveAdd = () =>{
        const {form} = this.formRef.props;
        form.validateFieldsAndScroll((err,values) =>{
            if(err){
                return;
            }
            if(this.props.isedit){
                this.props.onUpdata(values);
            }else{
                this.props.onSave(values);
            }
        })
    }
    render() {
        const columns = [
            {
                title: '平台编号',
                dataIndex: 'PlatformCode',
                width: '120px'
            }, {
                title: '平台名称',
                dataIndex: 'PlatformName'
            }, {
                title: '是否停用',
                dataIndex: 'IsStop',
                render: (record) => {
                    if (record) {
                        return <span style={{
                                color: 'red'
                            }}>√</span>
                    }
                }
            }, {
                title: '创建时间',
                dataIndex: 'CreateTime',
                width: '120px',
                render: (record) => datefmt(record, 'yyyy-MM-dd')
            }, {
                title: '操作',
                key: 'action',
                width: '200px',
                render: (record) => <span>
                        <a onClick={()=>this.props.onView(record.RecId)}>详情</a>
                        <a style={{
                                marginLeft: '15px'
                            }} onClick={()=>this.props.onSingle(record.RecId)}>修改</a>
                        <a style={{
                                marginLeft: '15px'
                            }} onClick={() => this.props.onDelete(record.RecId)}>删除</a>
                    </span>
            }
        ];
        const {totalcount, list, searchtxt, pageindex, pagesize,dialogtitle,isedit,isview} = this.props;
        const modalChildren = () =>{
            if(!isedit){
                return <Add wrappedComponentRef={inst => this.formRef = inst}/>
            }else{
                if(isview){
                    console.log(1111111)
                    return <Detial wrappedComponentRef={inst => this.formRef = inst} data={this.props.detail}/>
                }else{
                    return <Mod wrappedComponentRef={inst => this.formRef = inst} data={this.props.detail}/>
                }
            }
        }
        return (<div>
            <ActionButtonDiv modalChildren={modalChildren()}
                            onAdd={() => this.props.onDialog({isshow:true,isedit:false,dialogtitle:'新增'})}
                            dialogIsShow={this.props.isshow}
                            dialogCancelFunc={()=>this.props.onDialog({isshow:false,isedit:false})}
                            showFooter={true}
                            dialogOkFunc={()=>this.saveAdd()}
                            dialogTitle={dialogtitle}
                        />
            <SearchDiv  inputPlaceholder='输入平台名称查询'
                        onSearch={(value) => {
                            const params = {
                                pageindex: pageindex,
                                pagesize: pagesize,
                                searchtxt:value.trim(),
                                platformname: value.trim()
                            };
                            this.props.onLoad(params);
                        }}/>
            <TableDiv   columns={columns}
                        datasource={list}
                        setRowKey={(record) => record.RecId}
                        totalcount={totalcount}
                        showTotal={(totalcount) => `总记录: ${totalcount} 条`}
                        pageSizeChange={(index, size) => {
                    const params = {
                        pageindex: index,
                        pagesize: size,
                        platformname: searchtxt
                    };
                    this.props.onLoad(params);
                }}
                        showSizeChange={(index, size) => {
                        const params = {
                            pageindex: index,
                            pagesize: size,
                            platformname: searchtxt
                        };
                        this.props.onLoad(params);
                    }}/>
        </div>);
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state.platform;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (params) => dispatch(loadDataAction(params)),
        onDelete: (id) => {
            tipMsg(null, '确定要删除吗?', () => {
                dispatch(deleteDataAction(id))
            });
        },
        onDialog: (params) => dispatch(showDialogAction(params)),
        onSave:(params) => dispatch(addDataAction(params)),
        onSingle:(id) => dispatch(getSingleAction(id)),
        onUpdata:(params)=>dispatch(updataDataAction(params)),
        onView:(id) => dispatch(viewDetailAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlatFormContainer);
