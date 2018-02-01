import React, {Component} from 'react';
import TableDiv from '../../components/TableDiv';
import SearchDiv from '../../components/SearchDiv';
import {connect} from 'dva';
import {datefmt} from '../../libs/datefmt';

class MemberContainer extends Component {
  render() {
    const columns = [
      {
        title: '会员名',
        dataIndex: 'MemName',
        width: '150px'
      }, {
        title: '联系电话',
        dataIndex: 'Phone',
        width: '150px'
      }, {
        title: '店铺名称',
        dataIndex: 'ShopName',
        width: '200px'
      }, {
        title: '所在省份',
        dataIndex: 'ProvinceName',
        key: 'ProvinceName'
      }, {
        title: '所在城市',
        dataIndex: 'CityName',
        key: 'CityName'
      }, {
        title: '所在地区',
        dataIndex: 'AreaName',
        key: 'AreaName'
      }, {
        title: '详细地址',
        dataIndex: 'Address',
        key: 'Address'
      }, {
        title: '创建时间',
        dataIndex: 'CreateTime',
        key: 'CreateTime',
        width: '130px',
        render: (record) => datefmt(record, 'yyyy-MM-dd')
      }
    ];
    const {totalcount, pagesize,searchtxt,startdate,enddate,searchvalue} = this.props;
    const options = [
        {value:'membername',text:'按会员名查询'},
        {value:'provincename',text:'按所在省份查询'},
        {value:'cityname',text:'按所在城市查询'},
        {value:'areaname',text:'按所在区县查询'},
    ]
    return (<div>
      <SearchDiv inputPlaceholder='输入关键字查询'
                 onSearch={(value) =>{
                     let params = {
                         pageindex:1,
                         pagesize:pagesize,
                         CreateTimeStart:startdate,
                         CreateTimeEnd:enddate,
                         searchtxt:value.trim(),
                     }
                     params[searchvalue] = value.trim();
                     this.props.onLoad(params);
                 }}
                 showSelect={true}
                 selectWidth={150}
                 selectOpts={options}
                 selectDefault={'membername'}
                 showDatePicker={true}
                 datePickerChange={(date,datestring)=> this.props.onDateChange(date,datestring)}
                 selectChange={(value) => this.props.onSelectChange(value)}
      />
      <TableDiv columns={columns}
          datasource={this.props.list}
          setRowKey={(record) => record.RecId}
          totalcount={totalcount}
          showTotal={(totalcount) => `总记录：${totalcount} 条`}
          pageSizeChange={(page, pagesize) => {
          let params = {
            pageindex: page,
            pagesize: pagesize,
            CreateTimeStart:startdate,
            CreateTimeEnd:enddate,
            searchtxt:searchtxt
          }
          params[searchvalue] = searchtxt;
          this.props.onLoad(params)
        }}
        showSizeChange={(page, pagesize) => {
          let params = {
            pageindex: page,
            pagesize: pagesize,
            CreateTimeStart:startdate,
            CreateTimeEnd:enddate,
            searchtxt:searchtxt
          }
          params[searchvalue] = searchtxt;
          this.props.onLoad(params)
        }}/>
    </div>);
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state.members;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (params) => dispatch({type: 'members/loaddata', payload: params}),
    onDateChange:(date,datestring) => dispatch({type:'members/saveDateTime',payload:datestring}),
    onSelectChange:(value) => dispatch({type:'members/saveSearchValue',payload:value}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer);
