import React from 'react';

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Author',
        link: 'https://github.com/Lakston',
        icon: 'fa-pencil-square-o'
      }, {
        text: 'Github page',
        link: 'https://github.com/Lakston',
        icon: 'fa-github'
      }, {
        text: 'Twitter',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      }]
    }
  }
  render() {
    let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link} target="_blank">{link.text}</a></li>);

    return (
        <div className={this.props.menuStatus} id='menu'>
          <ul>
            { links }
          </ul>
        </div>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
      isOpen: false
    });
    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
      <div ref="root">
        <div className="menubar">
          <div className="hambclicker" onClick={ this._menuToggle }></div>
          <div id="hambmenu" className={ menuStatus }></div>
          <div className="title">
            <span>{ this.props.title }</span>
          </div>
        </div>
        <MenuLinks menuStatus={ menuStatus }/>
      </div>
    )
  }
}

export default Menu
