import React from "react";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import Analytics from "./Components/Analytics";
import { Redirect, Switch, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import LeftPanel from "./Components/DashboardComponents/LeftPanel";
import Login from "./Components/Login/Login";
import { Container } from "reactstrap";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <div className="d-flex container-fluid">
//         <div className="row-wrapper">
//           <div className="col-md-2  sticky-bar bg-white my-4 cont h-100">
//             <LeftPanel />
//           </div>
//           <div className="mx-2 my-4"></div>
//           <Container fluid>{children}</Container>
//         </div>
//       </div>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <div className="container-fluid" style={{ width: "95%" }}>
//         <div className="row wrapper">
//           <div className="col-md-2  sticky-bar bg-white my-4 cont h-100">
//             <LeftPanel />
//           </div>
//           <div className="mx-2 my-4"></div>
//           {/* <div className="col-md-1 d-none d-md-block p-0"></div> */}
//           <div className="col-md-10 bg-white my-4 cont">
//             <Switch>
// <Route exact path="/login">
//   <Login />
// </Route>
// <Route exact path="/">
//   <Home />
// </Route>
//               <Route exact path="/posts">
//                 <Posts />
//               </Route>
//               <Route exact path="/analytics">
//                 <Analytics />
//               </Route>
//               <Route exact path="/comments">
//                 <Comments />
//               </Route>
//               <Route>
//                 <Redirect to="/" />
//               </Route>
//             </Switch>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;
const Layout = ({ children }) => {
  return (
    <>
      <div className="container-fluid" style={{ width: "95%" }}>
        <div className="row-wrapper d-flex">
          <div className="col-md-2  sticky-bar bg-white my-4 cont h-100">
            <LeftPanel />
          </div>
          <div className="mx-2 "></div>
          <div className="col-md-10 bg-white my-4 cont">
            <Container fluid>{children}</Container>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/posts">
          <Layout>
            <Posts />
          </Layout>
        </Route>
        <Route exact path="/analytics">
          <Layout>
            <Analytics />
          </Layout>
        </Route>
        <Route exact path="/comments">
          <Layout>
            <Comments />
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// Dashboard component is an entry component
