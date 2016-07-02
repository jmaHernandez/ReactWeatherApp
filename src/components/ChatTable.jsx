import React from 'react';

class ChatTable extends React.Component {
	render() {
		console.log('ChatTable rendering');
		return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">{`${this.props.userName}'s Chat`}</span>
          </div>
          <div className="card">
            {
              this.props.messageList.map((msg) => {
                if (msg.userName === 'You') {
                  return (
                    <div className="card-content right-align">
                      <div className="chip">
                        <b>{msg.userName}: </b>
                        <text>{msg.message}</text>
                      </div>
                    </div>
                  )
                }
                return (
                  <div className="card-content left-align">
                    <div className="chip">
                      <b>{msg.userName}: </b>
                      <text>{msg.message}</text>
                    </div>
                  </div>
                )
              })
            }
            <div className="card-action">
              <div className="row">
                <form className="col s12">
                  <div className="input-field col s10">
                    <input type="text" />
                  </div>
                  <div className="input-field col s2">
                    <a className="waves-effect waves-light btn">Enviar</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

ChatTable.propTypes = {
  userName: React.PropTypes.string.isRequired,
  messageList: React.PropTypes.array.isRequired
}

export default ChatTable;
