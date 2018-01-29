import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import ActionButtonDiv from '../../components/ActionButtonDiv';
import SearchDiv from '../../components/SearchDiv';
import TableDiv from '../../components/TableDiv';
import {loadDataAction,saveCreateTimeAction,saveSearchValueAction} from '../../actions/members/actions';
import {datefmt} from '../../libs/datefmt';


class MembersContainer extends Component{
    componentDidMount(){
        this.props.onLoad({searchvalue:this.props.searchvalue});
    }
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
        const {totalcount,pageindex,pagesize,searchtxt,searchvalue,starttime,endtime} = this.props;
        const options = [
            {value:'membername',text:'按会员名查询'},
            {value:'provincename',text:'按所在省份查询'},
            {value:'cityname',text:'按所在城市查询'},
            {value:'areaname',text:'按所在地区查询'},
        ];
        return (
            <div>
                <SearchDiv onSearch={(value) =>{
                    const params = {
                        pageindex:pageindex,
                        pagesize:pagesize,
                        searchtxt:value,
                        searchvalue:searchvalue,
                        createtimestart:starttime,
                        createtimeend:endtime,
                    };
                    this.props.onLoad(params);
                }}
                            showDatePicker={true}
                            datePickerChange={(date,datestring) => this.props.onDataTimeChange(date,datestring)}
                            showSelect={true}
                            selectChange={(value) =>this.props.onSelectChange(value)}
                            selectOpts={options}
                            selectDefault={'membername'}
                            selectWidth={150}
                />
                <TableDiv columns={columns}
                    datasource={this.props.list}
                    totalcount={totalcount}
                    setRowKey={(record) => record.RecId}
                    pageSizeChange={(page,pagesize) =>{
                        const params = {
                            pageindex:page,
                            pagesize:pagesize,
                            searchtxt:searchtxt,
                            searchvalue:searchvalue,
                            createtimestart:starttime,
                            createtimeend:endtime,
                        }
                        this.props.onLoad(params)
                    }}
                    showSizeChange={(page,pagesize) =>{
                        const params = {
                            pageindex:page,
                            pagesize:pagesize,
                            searchtxt:searchtxt,
                            searchvalue:searchvalue,
                            createtimestart:starttime,
                            createtimeend:endtime,
                        }
                        this.props.onLoad(params)
                    }}
                    showTotal={(totalcount) => `总记录: ${totalcount} 条`}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return state.members;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onLoad:(params) => dispatch(loadDataAction(params)),
        onDataTimeChange:(date,datestring) => dispatch(saveCreateTimeAction(date,datestring)),
        onSelectChange:(value) => dispatch(saveSearchValueAction(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MembersContainer);
