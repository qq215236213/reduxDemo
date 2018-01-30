import React , {Component} from 'react';
import {connect} from 'react-redux';
import TableDiv from '../../components/TableDiv';
import SearchDiv from '../../components/SearchDiv';
import ActionButtonDiv from '../../components/ActionButtonDiv';
import {loadDataAction,
    changeSelectedIdsAction,
    deleteDataAction,
    showDialogAction,
    saveDataAction,
    getSingleAction} from '../../actions/managers/actions';
import {datefmt} from '../../libs/datefmt';
import {tipMsg} from '../../libs/confirm';
import Add from './Add';
import Mod from './Mod';

class ManagerListContainer extends Component{
    componentDidMount(){
        this.props.onLoad();
    }

    save = () => {
        const {form} = this.formRef.props;
        form.validateFieldsAndScroll((err,values) =>{
            if(err){
                return ;
            }
            if(this.props.isedit){

            }else{
                this.props.onSave(values);
            }
        })
    }

    render(){
        const columns = [
			{
				title:'登录名',
				dataIndex:'LoginName',
				key:'LoginName',
			},
			{
				title:'状态',
				dataIndex:'CurStatus',
				key:'CurStatus',
				width:'150px',
				render:(record) =>record === 0
								?
								<span style={{color:'green'}}>正常</span>
								:
								<span style={{color:'red'}}>禁用</span>
			},
			{
				title:'是否管理员',
				dataIndex:'IsSystemManager',
				key:'IsSystemManager',
				width:'150px',
				render:(record) => record?'√':''
			},
			{
				title:'创建时间',
				dataIndex:'CreateTime',
				key:'CreateTime',
				width:'150px',
				render:(record) => datefmt(record,'yyyy-MM-dd')
			},
			{
				title:'操作',
				key:'action',
				width:'150px',
				render:(text) => (
					text.Id === 1
						?
						<span>
							<a onClick={()=>this.props.onSingle(text.Id)}>修改</a>
						</span>
						:
						<span>
							<a onClick={()=>this.props.onSingle(text.Id)}>修改</a>
							<a style={{marginLeft:'15px'}} onClick={() => this.props.onBatchDelete(text.Id)}>删除</a>
						</span>
				)
			}
		];
        const {totalcount,pageindex,pagesize,searchtxt,selectedids,dialogtitle,isshow,isedit,detail} = this.props;
        const showBatchDelBtn = () =>{
            if(selectedids.length > 0)
                return true;
            else
                return false;
        }
        const modalChildren = () =>{
            if(isedit){
                return <Mod wrappedComponentRef={inst => this.formRef = inst} data={detail}/>
            }else{
                return <Add wrappedComponentRef={inst => this.formRef = inst}/>
            }
        }
        return (
            <div>
                <ActionButtonDiv    showBatchDelButton={showBatchDelBtn()}
                                    onBatchDel={()=> this.props.onBatchDelete(selectedids)}
                                    showFooter={true}
                                    onAdd={()=>this.props.onDialog({isshow:true,isedit:false,dialogtitle:'新增'})}
                                    dialogTitle={dialogtitle}
                                    dialogIsShow={isshow}
                                    dialogCancelFunc={()=>this.props.onDialog({isshow:false})}
                                    modalChildren={modalChildren()}
                                    dialogOkFunc={this.save}
                />
                <SearchDiv  inputPlaceholder='输入登录名查询'
                            onSearch={(value) =>{
                                const params = {
                                    pageindex:pageindex,
                                    pagesize:pagesize,
                                    loginname:value
                                };
                                this.props.onLoad(params);
                            }}
                />
                <TableDiv   columns={columns}
                            datasource={this.props.list}
                            setRowKey={(record) => record.Id}
                            totalcount={totalcount}
                            showTotal={(totalcount) => `总记录：${totalcount} 条`}
                            showRowCheckbox={true}
                            pageSizeChange={(page,pagesize) =>{
                                const params = {
                                    pageindex:page,
                                    pagesize:pagesize,
                                    loginname:searchtxt
                                }
                                this.props.onLoad(params);
                            }}
                            showSizeChange={(page,pagesize) =>{
                                const params = {
                                    pageindex:page,
                                    pagesize:pagesize,
                                    loginname:searchtxt
                                }
                                this.props.onLoad(params);
                            }}
                            rowSelectChange={(ids) => this.props.onSelectedIdsChange(ids)}
                            checkboxProps={(record)=>{ return {disabled:record.Id === 1}}}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return state.managers;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onLoad:(params) => dispatch(loadDataAction(params)),
        onSelectedIdsChange:(selectedRowKeys) => dispatch(changeSelectedIdsAction(selectedRowKeys)),
        onBatchDelete:(ids) => {
            tipMsg(null,'确定要删除吗?',()=>{
                dispatch(deleteDataAction(ids));
            });
        },
        onDialog:(params)=>dispatch(showDialogAction(params)),
        onSave:(params) => dispatch(saveDataAction(params)),
        onSingle:(id) => dispatch(getSingleAction(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManagerListContainer);
