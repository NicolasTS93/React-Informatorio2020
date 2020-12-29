import {Component} from 'react';
import img from "./pictures/imagen1.png" 
import './styles/section.css'

const Article = ()=>(
    <div id="article">
        <img src={img}></img>
        <h3 id="title">I like the body. I like to desing everything to do with the body.</h3>
        <p id="text"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, 
            laboriosam exercitationem eaque corrupti rem eum labore, tempora repellendus 
            illum, soluta repudiandae temporibus 
            voluptatem similique. Porro, reiciendis! Odio obcaecati porro officiis.
        </p>

    </div>

);
class Section extends Component{
render(){
    return(
        <section id="section">
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </section>
    )
};

}

export default Section;

