import React ,{Component} from 'react';
import TableDiv from '../../components/TableDiv';
import SearchDiv from '../../components/SearchDiv';
import ActionButtonDiv from '../../components/ActionButtonDiv';
import {connect} from 'dva';
import {datefmt} from '../../libs/datefmt';

class MemberContainer extends Component{
    render(){
        const columns = [
           {
               title:'会员名',
               dataIndex:'MemName',
               width:'150px'
           },
           {
               title:'联系电话',
               dataIndex:'Phone',
               width:'150px'
           },
           {
               title:'店铺名称',
               dataIndex:'ShopName',
               width:'200px'
           },
           {
               title:'所在省份',
               dataIndex:'ProvinceName',
               key:'ProvinceName',
           },
           {
               title:'所在城市',
               dataIndex:'CityName',
               key:'CityName',
           },
           {
               title:'所在地区',
               dataIndex:'AreaName',
               key:'AreaName',
           },
           {
               title:'详细地址',
               dataIndex:'Address',
               key:'Address'
           },
           {
               title:'创建时间',
               dataIndex:'CreateTime',
               key:'CreateTime',
               width:'130px',
               render:(record) => datefmt(record,'yyyy-MM-dd')
           }
       ];
        return (
            <TableDiv columns={columns}/>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return state.members;
}


export default connect(mapStateToProps)(MemberContainer);
