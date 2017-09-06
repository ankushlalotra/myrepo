import 'whatwg-fetch';
export const ESCLATE_REQ_START = 'ESCLATE_REQ_START';
export const ESCLATE_REQ_ERR = 'ESCLATE_REQ_ERR';
export const ESCLATE_REQ_SUCCESS = 'ESCLATE_REQ_SUCCESS';
//console.log("doESCLATEcalled");
function esclateReqStart() {
	return {
		type: ESCLATE_REQ_START
	};
};

function esclateReqErr(payload) {
	return {
		type: ESCLATE_REQ_ERR,
		message: payload
	};
};

function esclateReqSuccess(res) {
	return {
		type: ESCLATE_REQ_SUCCESS,
		payload: res
	};
};

export function doesclateReq(params) {
	var p=JSON.parse(params);
	console.log(p);
	debugger;
	return (dispatch, state) => {
		
		dispatch(esclateReqStart());
				return fetch('http://127.0.0.1:8080/ticket/update/status', {
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

					return dispatch(esclateReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(esclateReqErr(res));
				}
			})

			.catch(error => dispatch(esclateReqErr(error)));
	};
};