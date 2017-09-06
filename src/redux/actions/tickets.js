import 'whatwg-fetch';
export const SUPPORT_REQ_START = 'SUPPORT_REQ_START';
export const SUPPORT_REQ_ERR = 'SUPPORT_REQ_ERR';
export const SUPPORT_REQ_SUCCESS = 'SUPPORT_REQ_SUCCESS';

function supportReqStart() {
	return {
		type: SUPPORT_REQ_START
	};
};

function supportReqErr(payload) {
	return {
		type: SUPPORT_REQ_ERR,
		message: payload
	};
};

function supportReqSuccess(res) {
	return {
		type: SUPPORT_REQ_SUCCESS,
		payload: res
	};
};

export function dosupportReq(params) {
	var p=JSON.parse(params);
	return (dispatch, state) => {
		
		dispatch(supportReqStart());
				return fetch('http://127.0.0.1:8080/alltickets/filter', {
					mode: 'cors',
					method: "post",
					headers:{'Accept':'application/json , text/plain, */*',
						     'Content-type':'application/json'
				},
					body: JSON.stringify(p)

				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {

					return dispatch(supportReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(supportReqErr(res));
				}
			})

			.catch(error => dispatch(supportReqErr(error)));
	};
};