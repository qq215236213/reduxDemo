import React ,{Component} from 'react';
import LoginContainer from './routes/LoginContainer';
import {withRouter,Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import PageLayout from './components/PageLayout';
import MemberListContainer from './routes/MemberListContainer';

class RouteMiddle extends Component{
  render(){
    const {location} = this.props;
    const route = () =>{
      if(location.pathname === '/login'){
        return <Route path={'/login'} component={LoginContainer}/>
      }else{
        return (
          <PageLayout>
            <Route path={'/'} exact component={IndexPage}/>
            <Route path={'/product'} component={Products}/>
            <Route path={'/memberlist'} component={MemberListContainer}/>
          </PageLayout>
        );
      }
    }
    return (
      <div>
        {route()}
      </div>
    );
  }
}

export default withRouter(RouteMiddle);
