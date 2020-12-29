import {Component} from 'react';
import './styles/header.css';
import Search from "./pictures/search.svg"


const Navbar  = ()=>(
    <nav id="nav">
        <ul id="items">
            <li><a href="">HOME</a></li>
            <li><a href="">NEWS</a></li>
            <li><input id="inp_search" placeholder="Search"></input></li>
            <li ><button id="btn_search"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABRElEQVRIS72VYVXDQBCEZxSABFAAdQASUAAOACetA3CAA3BAHdA6AAXDG95e39Fmc+lL0vvXNLff3NzuhJh5ceb6SAGSLgA8ArgBcB1C1gA+AKxIboaI6wRIWkbxvhpLks8tyAFAklVexcZXAC7kZ5DkkzwBuC8nIrnog/wDVMp/bE0pvF8gQLbqLOwytHPtAOH5V7y1yIqXKgH5jN+X2Z3UgOK7LzBVVMuU9BJ2pXtqQPG+qb7jFOvsLmqAvJHkUbMhqXffSQFjLNqS9GAerJNeshXM16YxqaVVvwHcNgbtHcD54EGrWq+OCve5e7yOCgfgQ2W2/7MYi8rvYG+AhoTdKpLWuZVCWnHtiXZcl/DbAniLANxIskXOpBRy1FB1WdCCjAZEc9QnuSPpU/6tSQAVxBG/Kz4poPk9yF4Y+3wyizIhv0QaqBmi47TaAAAAAElFTkSuQmCC"/></button></li>
            <li><a id="face" href="https://www.facebook.com"></a></li>
            <li><a id="twitter" href="https://www.twitter.com"></a></li>
            <li><a href="#world"></a></li>
        </ul>  
        
    </nav>
);

const Title = ()=> (
    <div id="cont_title">
        <h1 className="title">Blog grid full width</h1>
        <p id="text">Lorem Ipsum is simply dummy text printing</p>
        <ul id="bar">
            <li><img></img></li>
            <li><img></img></li>
        </ul>
    </div>
);

class Header extends Component{
    
    render(){
        return(
            <div id="header">
                <Navbar/>
                <Title/>
            </div>
        );
    }
    
}

export default Header;