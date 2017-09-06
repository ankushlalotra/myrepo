import 'whatwg-fetch';
export const TICKET_REQ_START = 'TICKET_REQ_START';
export const TICKET_REQ_ERR = 'TICKET_REQ_ERR';
export const TICKET_REQ_SUCCESS = 'TICKET_REQ_SUCCESS';

function ticketReqStart() {
	return {
		type: TICKET_REQ_START
	};
};

function ticketReqErr(payload) {
	return {
		type: TICKET_REQ_ERR,
		message: payload
	};
};

function ticketReqSuccess(res) {
	return {
		type: TICKET_REQ_SUCCESS,
		payload: res
	};
};

export function doticketReq(id) {
//	var p=JSON.parse(params);
	return (dispatch, state) => {
		
		dispatch(ticketReqStart());
				return fetch('http://127.0.0.1:8080/ticket/'+id, {
					mode: 'cors',
					method: "get",
					headers:{'Accept':'application/json , text/plain, */*',
						     'Content-type':'application/json'
				}
				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {

					return dispatch(ticketReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(ticketReqErr(res));
				}
			})

			.catch(error => dispatch(ticketReqErr(error)));
	};
};