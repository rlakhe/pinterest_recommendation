import React from 'react';

class ChatMainDiv extends React.Component {
	render() {
		var style = {position:'fixed', top:'20px'};
		return (
			<div className="col-md-4 col-sm-offset-4 frame">
				<ChatContainer/>
				<ChatTextArea/>
			</div>
		);
	}
}

class ChatContainer extends React.Component {
	render() {
		
		return (
			
				<ul>
				</ul>
		);
	}
}

class ChatTextArea extends React.Component {
	render() {
		var style_parent = {margin:'auto'};
		var style_child  = {background:'whitesmoke'};
		return (
			<div>
				<div className="msj-rta macro" style={style_parent}>                    
					<div className="text text-r" style={style_child}>
						<textarea className="mytext" cols="30" rows="2" placeholder="Type a message"/>
					</div>
				</div>
			</div>
		);
	}
}



class StaticPinterest extends React.Component {
    render() {
    	return (<div>
    				<a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://uk.pinterest.com/s_maskey/ring/"></a>
    			</div>);
    }
}
export default ChatMainDiv;

