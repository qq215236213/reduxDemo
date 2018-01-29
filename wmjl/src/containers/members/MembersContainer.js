import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import ActionButtonDiv from '../../components/ActionButtonDiv';
import SearchDiv from '../../components/SearchDiv';
import TableDiv from '../../components/TableDiv';
import {loadDataAction} from '../../actions/members/actions';
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
        const {totalcount,pageindex,pagesize,searchtxt,searchvalue} = this.props;
        return (
            <div>
                <ActionButtonDiv />
                <SearchDiv onSearch={(value) =>
                    this.props.onLoad({pageindex:pageindex,pagesize:pagesize,searchtxt:value,searchvalue:searchvalue})}
                            showDatePicker={true}
                />
                <TableDiv columns={columns}
                    datasource={this.props.list}
                    totalcount={totalcount}
                    setRowKey={(record) => record.RecId}
                    pageSizeChange={(page,pagesize) =>
                        this.props.onLoad({pageindex:page,pagesize:pagesize,searchtxt:searchtxt,searchvalue:searchvalue})}
                    showSizeChange={(page,pagesize) =>
                        this.props.onLoad({pageindex:page,pagesize:pagesize,searchtxt:searchtxt,searchvalue:searchvalue})}
                    showTotal={(totalcount) => `总记录: ${totalcount} 条`}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return state.members;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onLoad:(params) => dispatch(loadDataAction(params)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MembersContainer);
