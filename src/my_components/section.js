import React, {Component, useEffect, useState} from 'react';
import img from "./pictures/imagen1.png" 
import './styles/section.css'

const Article = ()=>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const [todos, setTodos] = useState();
    const fetchApi = async()=>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setTodos(responseJSON);
    }
    useEffect (()=>{
        fetchApi();
    },[]);
    
    return(
    <div id="article">
        <img src={img}></img>
        <h3 id="title">I like the body. I like to desing everything to do with the body.</h3>
        <p id="text"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, 
            laboriosam exercitationem eaque corrupti rem eum labore, tempora repellendus 
            illum, soluta repudiandae temporibus 
            voluptatem similique. Porro, reiciendis! Odio obcaecati porro officiis.
        </p>
        <ul>
            {!todos ? 'Cargando...': 
                todos.map((todo, index)=>{
                    return<li key={index}>{todo.title}</li>
                })
            }
        </ul>
    </div>
    )

};
class Section extends Component{

    render(){
        return(
            <section id="section">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                
            </section>
        )
    };

}

export default Section;

