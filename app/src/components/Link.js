import React ,{Component} from 'react';
import PropTypes from 'prop-types';


class Link extends Component{
    render(){
        const {active,children,onClick} = this.props;
        const ele = () =>{
            if(active){
                return <span>{children}</span>
            }

            return (
                <a onClick={e => {e.preventDefault();onClick()}}
                >
                    {children}
                </a>
            );
        }
        return (
            {ele()}
        );
    }
}
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;