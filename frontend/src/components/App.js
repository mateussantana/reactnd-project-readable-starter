import React, {Component, Fragment} from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { connect} from "react-redux";
import LoadingBar from 'react-redux-loading'
import { handleInitialData} from "../actions/shared";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const xxx = 'Testando 123456...';
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact>
                    <h1>{ xxx }</h1>
                  </Route>
                </div>
            }
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
