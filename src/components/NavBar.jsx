import React from 'react';


class NavBar extends React.Component {

	render() {
		console.log('NavBar rendering');
		return (
			<nav>
			  <div className="nav-wrapper red darken-1">
			    <a className="brand-logo right" onClick={this.props.changeTitle}>{this.props.appTitle}</a>
			    <ul id="nav-mobile" className="left hide-on-med-and-down">
			      <li><a onClick={this.props.generateNewUser}>Generar Nuevo Usuario</a></li>
			      <li><a onClick={this.props.generateResponse}>Enviar Mensaje Chat</a></li>
						<li><a>Mensajes sin leer <span className="new badge">1</span></a></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}

NavBar.propTypes = {
  appTitle: React.PropTypes.string.isRequired,
  generateNewUser: React.PropTypes.func.isRequired,
  generateResponse: React.PropTypes.func.isRequired
}

export default NavBar;
