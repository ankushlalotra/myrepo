import 'whatwg-fetch';
export const REPLY_REQ_START = 'REPLY_REQ_START';
export const REPLY_REQ_ERR = 'REPLY_REQ_ERR';
export const REPLY_REQ_SUCCESS = 'REPLY_REQ_SUCCESS';
//console.log("doREPLYcalled");
function replyReqStart() {
	return {
		type: REPLY_REQ_START
	};
};

function replyReqErr(payload) {
	return {
		type: REPLY_REQ_ERR,
		message: payload
	};
};

function replyReqSuccess(res) {
	return {
		type: REPLY_REQ_SUCCESS,
		payload: res
	};
};

export function doreplyReq(params) {
	var p=JSON.parse(params);
	console.log(p);
	debugger;
	return (dispatch, state) => {
		
		dispatch(replyReqStart());
				return fetch('http://127.0.0.1:8080/ticket/reply', {
					mode: 'cors',
					method: "POST",
					headers:{'Accept':'application/json , text/plain, */*',
						     'Content-type':'application/json'
				},
					body: JSON.stringify(p)

				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {
					console.log("object Received");
					//let data = JSON.parse(res);

					return dispatch(replyReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(replyReqErr(res));
				}
			})

			.catch(error => dispatch(replyReqErr(error)));
	};
};