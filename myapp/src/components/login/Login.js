import React , { Component } from 'react';
import $ from 'jquery/dist/jquery.min';
import md5 from 'md5';
import {cookie} from '../common/cookie';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {login} from '../../actions/login/actions';
const FormItem = Form.Item;


class Login extends Component {
	constructor(props,context){
	    super(props,context);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.click = this.click.bind(this);
    }

	click(){
		const {store} = this.context;
		store.dispatch(login('123'));
		console.log(store.getState())
	}
	/*handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const username = values.username;
				const password = md5(values.password);
				$.post('/managelogin',{username:username,pwd:password},function (d) {
                    if(d.IsError){
                        message.error(d.Msg);
                        return;
                    }
                    cookie('token',d.Data.Token,{path:'/'});
                    cookie('memberid',d.Data.User.MemberId,{path:'/'});
                    cookie('membername',d.Data.User.MemberName,{path:'/'});
                    cookie('issystemmanager',d.Data.User.IsSystemManager,{path:'/'});
                    window.location.hash = '#/';
				});
			}
		});
	}*/
	render() {
		const {store} = this.context;
		console.log(store.getState())
		const { getFieldDecorator } = this.props.form;
		return (
			<Form style={{maxWidth:'300px',margin:'100px auto'}}>
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
					<Button type="primary" onClick={this.click} htmlType="button" style={{width:'100%'}}>
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

export default Form.create()(Login);
