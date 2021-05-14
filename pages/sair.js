import React from "react";
import Router from 'next/router';

export default class Sair extends React.Component {
    
    componentDidMount() {
        localStorage.removeItem('JWT_TOKEN');
        Router.push('/');
    }

    render() {
        return (<div>Saindo</div>);
    }
}