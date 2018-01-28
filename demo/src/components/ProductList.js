import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Table,Popconfirm,Button} from 'antd';

export default class ProductList extends Component{
    render(){
        const {onDelete,products} = this.props;
        const columns = [
            {
                title:'Name',
                dataIndex:'name'
            },
            {
                title:'Actions',
                render:(record) =>{
                    return (
                        <Popconfirm title='Delete?' onConfirm={()=>onDelete(record.id)}>
                            <Button>Delete</Button>
                        </Popconfirm>
                    );
                }
            }
        ]
        return (
            <Table rowKey={(record) => record.id} columns={columns} dataSource = {products}/>
        );
    }
}

ProductList.propTypes = {
    onDelete:PropTypes.func.isRequired,
    products:PropTypes.array.isRequired
}
