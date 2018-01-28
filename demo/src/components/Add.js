import React ,{Component} from 'react';
import {Input} from 'antd';
import PropTypes from 'prop-types';

class Add extends Component{
  render(){
    const {onAdd} = this.props;
    return (
      <div>
        <Input onPressEnter={(e) =>{onAdd(e.target.value);e.target.value = '';}}/>
      </div>
    );
  }
}

Add.propTypes = {
  onAdd:PropTypes.func.isRequired
}

export default Add;
