import React ,{ Component } from 'react';
import {Form,Input,Icon,Checkbox,Button} from 'antd';
import $ from 'jquery';
import md5 from 'md5';
const FormItem = Form.Item;

class Login extends Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(){
        const {form} = this.props;
        form.validateFieldsAndScroll((err,values) =>{
            if(err){
                return;
            }
            const username = values.username;
            const logpwd = md5(values.password);

            $.post('/managelogin',{username:username,pwd:logpwd},(d) =>{
               console.log(d)
            });
        });
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const usernameConfig = {
            rules:[
                {required:true,message:'用户名不能为空'}
            ]
        };
        return (
            <Form style={{maxWidth:300,margin:'100px auto'}}
            >
                <FormItem>
                    {getFieldDecorator('username',usernameConfig)(
                        <Input placeholder={'请输入用户名'}
                               prefix={<Icon type={'user'} style={{color:'rgba(0,0,0,.25)'}} />}
                        />
                    )}
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password',{
                            rules:[{
                                required:true,message:'密码不能为空'
                            }]
                        })(
                            <Input placeholder={'请输入用户名'}
                                   prefix={<Icon type={'lock'} style={{color:'rgba(0,0,0,.25)'}} />}
                                   type={'password'}
                            />
                        )
                    }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a style={{float:'right'}}>忘记密码</a>
                    <Button onClick={this.submit} type="primary" htmlType="submit" style={{width:'100%'}}>
                        登录
                    </Button>
                    <a>立即注册</a>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);