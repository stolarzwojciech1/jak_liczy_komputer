import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";

class Main extends Component {
render()  {
return (
    <HashRouter>
<div>
<h1>Prosta aplikacja jednostronowa</h1>
<ul className="header">
<li><NavLink to ="/">Strona główna</NavLink></li>
<li><NavLink to ="/stuff">Opis</NavLink></li>
<li><a href="/contact">Contact</a></li>

<Route exact path="/" component={Home}/>
<Route path="/stuff" component={Stuff}/>

</ul>

<div className="content">




</div>
</div>
</HashRouter>


);



}


}

export default Main;