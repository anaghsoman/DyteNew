
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import "index.js";
import Bodypart from './bodyPart';



var ps;



class Dashboard extends React.Component {


  
  state = {
    backgroundColor: "blue",
  };
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({ backgroundColor: color });
  };


  
  render() {
    return (
      
      <div className="wrapper">
        
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Postman Clone</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>

    <div class="container">
        <h1 class="my-3 text-center">Welcome To Postman Clone</h1>
    </div>

    <div class="container">
    <div className="Bodypart"><Bodypart /></div>
    
        <div class="form-group row">
            {/* <label for="url" class="col-sm-2 col-form-label">URL</label> */}
            {/* <div class="col-sm-10">
                <input type="text" class="form-control" id="url" placeholder="Enter your URL. (Ex: https://jsonplaceholder.typicode.com/users)" />
            </div> */}
        </div>
    
        
        {/* <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Request Type</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="requestType" id="get" value="GET" checked />
                        <label class="form-check-label" for="get">
                            GET
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="requestType" id="post" value="POST" />
                        <label class="form-check-label" for="post">
                            POST
                        </label>
                    </div>

                </div>
            </div>
        </fieldset>
        */}

       
        {/* <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Content Type</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="contentType" id="jsonRadio" value="json"
                            checked />
                        <label class="form-check-label" for="jsonRadio">
                            JSON
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="contentType" id="paramsRadio" value="params" />
                        <label class="form-check-label" for="paramsRadio">
                            Custom Parameters
                        </label>
                    </div>

                </div>
            </div>
        </fieldset> */}
       
        {/* <div id="parametersBox">
            <div class="form-row">
                <label for="url" class="col-sm-2 col-form-label">Parameter 1</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter 1 Key" />
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue1" placeholder="Enter Parameter 1 Value" />
                </div>
                <button id="addParam" class="btn btn-primary">+</button>
            </div>
            <div id="params"></div>
        </div>
        
        <div class="my-3" id="requestJsonBox">
            <div class="form-group row">
                <label for="requestJsonText" class="col-sm-2 col-form-label">Enter Request Json</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="requestJsonText" rows="3"></textarea>
                </div>
            </div>
        </div>
       
        <div class="form-group row my-2">
            <div class="col-sm-10">
                <button id="submit" class="btn btn-primary">Submit</button>
            </div>
        </div> */}

        
        {/* <div class="my-3" id="responseJsonBox">
                <div class="form-group row">
                    <label for="responseJsonText" class="col-sm-2 col-form-label">Response</label>
                    <div class="col-sm-10">
                    <textarea class="form-control" id="responseJsonText" rows="3">Your response will appear here</textarea>

                        <pre id='responsePre' class="language-javascript"> <code id='responsePrism' class="language-javascript"> Your response will appear here </code> </pre>
                    </div>
                </div>

                
            </div> */}
            
    </div>
  
   
          {/* <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch> */}
          <Footer fluid />
        </div>
      </div>
    );
    
  }
}

export default Dashboard;
