import 'whatwg-fetch';
export const TRANSACTION_REQ_START = 'TRANSACTION_REQ_START';
export const TRANSACTION_REQ_ERR = 'TRANSACTION_REQ_ERR';
export const TRANSACTION_REQ_SUCCESS = 'TRANSACTION_REQ_SUCCESS';
console.log("doTRANSACTIONcalled");
function TRANSACTIONReqStart() {
	return {
		type: TRANSACTION_REQ_START
	};
};

function TRANSACTIONReqErr(payload) {
	return {
		type: TRANSACTION_REQ_ERR,
		message: payload
	};
};

function TRANSACTIONReqSuccess(res) {
	return {
		type: TRANSACTION_REQ_SUCCESS,
		payload: res
	};
};

export function doTRANSACTIONReq(params) {

	return (dispatch, state) => {
		dispatch(TRANSACTIONReqStart());
				return fetch('http://127.0.0.1:8080/user/transactions/'+params, {
					mode: 'cors',
					method: "GET",


				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {


					return dispatch(TRANSACTIONReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(TRANSACTIONReqErr(res));
				}
			})

			.catch(error => dispatch(TRANSACTIONReqErr(error)));
	};
};
