import React from 'react';
import logo from './react.svg';

import './Home.css';

type Props = {

}

type State = {
  text: string
}

class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    this.setState({
      text: 'Hello guys'
    })
  }

  render() {
    const { text } = this.state
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>{text}</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or{' '}
          <code>src/Home.tsx</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
