import 'whatwg-fetch';
export const USERUPDATE_REQ_START = 'USERUPDATE_REQ_START';
export const USERUPDATE_REQ_ERR = 'USERUPDATE_REQ_ERR';
export const USERUPDATE_REQ_SUCCESS = 'USERUPDATE_REQ_SUCCESS';
function userUpdateReqStart() {
	return {
		type: USERUPDATE_REQ_START
	};
};

function userUpdateReqErr(payload) {
	return {
		type: USERUPDATE_REQ_ERR,
		message: payload
	};
};

function userUpdateReqSuccess(res) {
	return {
		type: USERUPDATE_REQ_SUCCESS,
		payload: res
	};
};

export function douserUpdateReq(params) {
	
	var p=JSON.parse(params);
	return (dispatch, state) => {
		
		dispatch(userUpdateReqStart());
				return fetch('http://127.0.0.1:8080/user/update', {
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
					console.log(res)
					//let data = JSON.parse(res);
					  alert("record Update successfully ");
					return dispatch(userUpdateReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(userUpdateReqErr(res));
				}
			})

			.catch(error => dispatch(userUpdateReqErr(error)));
	};
};