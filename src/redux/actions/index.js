import 'whatwg-fetch';
export const USER_REQ_START = 'USER_REQ_START';
export const USER_REQ_ERR = 'USER_REQ_ERR';
export const USER_REQ_SUCCESS = 'USER_REQ_SUCCESS';
console.log("dousercalled");
function USERReqStart() {
	return {
		type: USER_REQ_START
	};
};

function USERReqErr(payload) {
	return {
		type: USER_REQ_ERR,
		message: payload
	};
};

function USERReqSuccess(res) {
	return {
		type: USER_REQ_SUCCESS,
		payload: res
	};
};

export function douserReq() {
	console.log("dousercallvvved");
	return (dispatch, state) => {
		
		dispatch(USERReqStart());
				return fetch('http://127.0.0.1:8080/users', {
					mode: 'cors',
					method: "GET"
				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {
					console.log(res)
					//let data = JSON.parse(res);

					return dispatch(USERReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(USERReqErr(res));
				}
			})

			.catch(error => dispatch(USERReqErr(error)));
	};
};