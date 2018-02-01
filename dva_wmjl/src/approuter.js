import React ,{Component} from 'react';
import {withRouter,Route} from 'dva/router';
import LoginContainer from './routes/login/LoginContainer';
import PageLayout from './components/PageLayout';
import MemberContainer from './routes/members/MemberContainer';
import PlatformContainer from './routes/platforms/PlatformContainer';

class AppRouter extends Component {
    render(){
        const {location} = this.props;
        const routers = () =>{
            if(location.pathname === '/login'){
                return <Route path='/login' component={LoginContainer}/>
            }else{
                return (
                    <PageLayout>
                        <div>
                            <Route path='/' exact component={MemberContainer}/>
                            <Route path='/platform' component={PlatformContainer}/>
                        </div>
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
