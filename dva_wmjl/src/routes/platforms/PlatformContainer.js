import React , {Component} from 'react';
import {connect} from 'dva';
import TableDiv from '../../components/TableDiv';
import SearchDiv from '../../components/SearchDiv';
import ActionButtonDiv from '../../components/ActionButtonDiv';
import {datefmt} from '../../libs/datefmt';

class PlatformContainer extends Component{
    render(){
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
                       <a >详情</a>
                       <a style={{
                               marginLeft: '15px'
                           }} >修改</a>
                       <a style={{
                               marginLeft: '15px'
                           }}>删除</a>
                   </span>
           }
       ];
       const {totalcount} = this.props;
        return (
            <div>
                <TableDiv
                    columns={columns}
                    datasource={this.props.list}
                    totalcount={totalcount}
                    setRowKey={(record) => record.RecId}
                    showTotal={(totalcount)=> `总记录：${totalcount} 条`}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state.platforms;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad:(params) => dispatch({type:'loaddata',payload:params}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlatformContainer);
