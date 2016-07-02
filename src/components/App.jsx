import React from 'react';
import {
	generateNewUser,
	generateResponse
} from '../utils/chatHelper';
import NavBar from './NavBar';
import ChatTable from './ChatTable';
import SideChat from './SideChat';
import shortId from 'shortId';

const initialState = {
	userList: ['user_1', 'user_2'],
	currentChat: {
		userName: 'user_1',
		messageList:[
			{
				userName: 'You',
				message: 'hey'
			},
			{
				userName: 'user_1',
				message: 'hola'
			}
		]
	},
	appTitle: 'React Chat'
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
		this.createUser = this.createUser.bind(this);
		this.createResponse = this.createResponse.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
	}

	changeTitle() {
		this.setState({appTitle: shortId.generate()})
	}

	createUser() {
		generateNewUser().then((user) => {
			let newUserList = this.state.userList.slice();
			newUserList.push(user);
			this.setState({userList: newUserList});
		});
	}

	createResponse() {
		generateResponse(this.state.currentChat.userName).then((msg) => {
			let newMsgList = this.state.currentChat.messageList.slice();
			newMsgList.push(msg);
			const newCurrentChat = Object.assign(this.state.currentChat, {messageList: newMsgList});
			this.setState({currentChat: newCurrentChat});
		});
	}

	render() {
		return (
			<div className="container">
				<NavBar
					appTitle={this.state.appTitle}
					generateNewUser={this.createUser}
					changeTitle={this.changeTitle}
					generateResponse={this.createResponse}
				/>
				<div className="row">
		      <SideChat
						userList={this.state.userList}
					/>
		      <ChatTable
						{...this.state.currentChat}
					/>
		    </div>
			</div>
		);
	}
}

export default App;
