import 'whatwg-fetch';
export const USERTICKETS_REQ_START = 'USERTICKETS_REQ_START';
export const USERTICKETS_REQ_ERR = 'USERTICKETS_REQ_ERR';
export const USERTICKETS_REQ_SUCCESS = 'USERTICKETS_REQ_SUCCESS';

function userticketsReqStart() {
	return {
		type: USERTICKETS_REQ_START
	};
};

function userticketsReqErr(payload) {
	return {
		type: USERTICKETS_REQ_ERR,
		message: payload
	};
};

function userticketsReqSuccess(res) {
	return {
		type: USERTICKETS_REQ_SUCCESS,
		payload: res
	};
};

export function douserticketsReq(id) {
debugger;
	return (dispatch, state) => {
				return fetch('http://127.0.0.1:8080/user/tickets/'+id, {
					mode: 'cors',
					method: "get",


				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {
					console.log("object Received");
					//let data = JSON.parse(res);

					return dispatch(userticketsReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(userticketsReqErr(res));
				}
			})

			.catch(error => dispatch(userticketsReqErr(error)));
	};
};
