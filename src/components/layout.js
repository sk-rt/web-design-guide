import React from 'react';
import { Link } from 'gatsby';
import Header from './header';
import Navigation from './navigation';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDrawer: false
    };
  }
  toggleDrawer(type = 'toggle') {
    switch (type) {
      case 'hide':
        this.setState({ isShowDrawer: false });
        break;
      case 'show':
        this.setState({ isShowDrawer: true });
        break;
      case 'toggle':
      default:
        this.setState({ isShowDrawer: !this.state.isShowDrawer });
        break;
    }
  }

  render() {
    const { title, children, current } = this.props;

    return (
      <div className="page-container">
        <Navigation
          current={current}
          isShowDrawer={this.state.isShowDrawer}
          toggleDrawer={() => {
            this.toggleDrawer();
          }}
        />
        <div className="page-content">
          <Header title={title} />

          <main>{children}</main>
          <footer className="page-footer">
            <Link to="about">About</Link>
            <small>
              © {new Date().getFullYear()}
              {` Ryuta Sakai`}
            </small>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
