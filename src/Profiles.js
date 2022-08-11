import React,{Component} from 'react';
import {connect, login} from './blockchain/substrate';

export default class Profiles extends Component{

    async unveilSecret(){
        login();

        return ;
        //const api = connect();
        //transfer();
        //console.log(await (await api).rpc.chain.getHeader());
    }

    render(){
        return(
            <div>
                <h1>Profiles</h1>

                <div>
                    <div>John Doe</div>
                    <div>xxx years</div>
                    <div>Born in xxx, DRC</div>
                    <div>Mathe is a full stack developer</div>
                    <div>Public address : 894389438439843934</div>
                    <div><a href="#">Explore transactions</a> <a href="#">Follow him</a> <a href="#">Tag as</a></div>
                    <div><button onClick={this.unveilSecret}>Ask to unveil hidden secret</button></div>
                </div>
            </div>
        );
    }

}