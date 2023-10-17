import { Navbar } from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Create } from "./pages/Create";
import { BlogDetails } from "./pages/BlogDetails";
import { NotFound } from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/Blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>  
      </div>
    </Router>
  );
}

export default App;
