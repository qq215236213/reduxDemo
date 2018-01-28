import React,{Component} from 'react';
import MemberList from '../components/MemberList';
import {connect} from 'dva';

class MemberListContainer extends Component{
  render(){
    const {list,totalcount} = this.props;
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
      }
    ];
    return (
      <div>
        <MemberList datasource={list} totalcount={totalcount} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return state.memberlist;
}


export default connect(mapStateToProps)(MemberListContainer);
