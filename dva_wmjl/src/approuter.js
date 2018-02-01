import React ,{Component} from 'react';
import {withRouter,Route} from 'dva/router';
import LoginContainer from './routes/login/LoginContainer';
import PageLayout from './components/PageLayout';
import MemberContainer from './routes/members/MemberContainer';

class AppRouter extends Component {
    render(){
        const {location} = this.props;
        const routers = () =>{
            if(location.pathname === '/login'){
                return <Route path='/login' component={LoginContainer}/>
            }else{
                return (
                    <PageLayout>
                        <Route path='/' component={MemberContainer}/>
                    </PageLayout>
                );
            }
        }
        return (
            <div>
                {routers()}
            </div>
        );
    }
}

export default withRouter(AppRouter);
