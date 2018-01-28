import React ,{Component}from 'react';
import {Table} from 'antd';
import PropTypes from 'prop-types';

class MemberList extends Component{
  render(){
    const {datasource,columns,totalcount} = this.props;
    return (
      <Table dataSource={datasource} columns={columns} pagination={{total:totalcount}} rowKey={(record)=>record.RecId}/>
    );
  }
}

MemberList.propTypes = {
  datasource:PropTypes.array,
  columns:PropTypes.array,
  totalcount:PropTypes.number
}

export default MemberList;
