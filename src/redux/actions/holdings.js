import 'whatwg-fetch';
export const HOLDINGS_REQ_START = 'HOLDINGS_REQ_START';
export const HOLDINGS_REQ_ERR = 'HOLDINGS_REQ_ERR';
export const HOLDINGS_REQ_SUCCESS = 'HOLDINGS_REQ_SUCCESS';
console.log("doHOLDINGScalled");
function HOLDINGSReqStart() {
	return {
		type: HOLDINGS_REQ_START
	};
};

function HOLDINGSReqErr(payload) {
	return {
		type: HOLDINGS_REQ_ERR,
		message: payload
	};
};

function HOLDINGSReqSuccess(res) {
	return {
		type: HOLDINGS_REQ_SUCCESS,
		payload: res
	};
};

export function doholdingsReq(params) {

	return (dispatch, state) => {
		dispatch(HOLDINGSReqStart());
				return fetch('http://127.0.0.1:8080/user/holdings/'+params, {
					mode: 'cors',
					method: "GET",


				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {
					console.log("object Received");
					//let data = JSON.parse(res);

					return dispatch(HOLDINGSReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(HOLDINGSReqErr(res));
				}
			})

			.catch(error => dispatch(HOLDINGSReqErr(error)));
	};
};
