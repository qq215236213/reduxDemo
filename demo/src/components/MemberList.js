import React ,{Component}from 'react';
import {Table} from 'antd';
import PropTypes from 'prop-types';

class MemberList extends Component{
  render(){
    const {datasource,columns,totalcount,onPageChange} = this.props;
    return (
      <Table dataSource={datasource}
             columns={columns}
             pagination={{total:totalcount,
                          onChange:(page,pagesize) =>onPageChange(page,pagesize),
                          showSizeChanger:true,
                          onShowSizeChange:(current,size) =>onPageChange(1,size),
                          showTotal:(totalcount)=>`总记录:${totalcount}条`
             }}
             rowKey={(record)=>record.RecId}
      />
    );
  }
}

MemberList.propTypes = {
  datasource:PropTypes.array,
  columns:PropTypes.array,
  totalcount:PropTypes.number,
  onPageChange:PropTypes.func
}

export default MemberList;
