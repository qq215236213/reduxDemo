import React , { Component } from 'react';
import md5 from 'md5';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class Login extends Component {
	constructor(props,context){
	    super(props,context);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleSubmit(e) {
		e.preventDefault();
		//const {store} = this.context;

		this.props.form.validateFields((err, values) => {
			if (!err) {
				const username = values.username;
				const password = md5(values.password);
        this.props.onClick(username,password);
			}
		});
	}
	render() {
		//console.log(this.context.store.getState())
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} style={{maxWidth:'300px',margin:'100px auto'}}>
				<FormItem>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: '请输入用户名!' }],
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '请输入密码!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>记住密码</Checkbox>
					)}
					<a style={{float:'right'}} href="">忘记密码</a>
					<Button type="primary" htmlType="submit" style={{width:'100%'}}>
						登录
					</Button>
					<a href="">立即注册</a>
				</FormItem>
			</Form>
		);
	}
}

Login.contextTypes = {
	store : PropTypes.object
}

Login.propTypes = {
  onClick:PropTypes.func
}

export default Form.create()(Login);
