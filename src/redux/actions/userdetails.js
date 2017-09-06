import 'whatwg-fetch';
export const USERDET_REQ_START = 'USERDET_REQ_START';
export const USERDET_REQ_ERR = 'USERDET_REQ_ERR';
export const USERDET_REQ_SUCCESS = 'USERDET_REQ_SUCCESS';
console.log("doUSERDETcalled");
function USERDETReqStart() {
	return {
		type: USERDET_REQ_START
	};
};

function UserdetReqErr(payload) {
	return {
		type: USERDET_REQ_ERR,
		message: payload
	};
};

function UserdetReqSuccess(res) {
	return {
		type: USERDET_REQ_SUCCESS,
		payload: res
	};
};

export function doUserdetReq(guid) {
	return (dispatch, state) => {
		
		dispatch(USERDETReqStart(guid));
				return fetch('http://127.0.0.1:8080/user/'+ guid, {
					mode: 'cors',
					method: "get"
					

				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {
	
	console.log("doUSERDETcallvvved");
	console.log(guid);
					console.log(res.data)
					//let data = JSON.parse(res);

					return dispatch(UserdetReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(UserdetReqErr(res));
				}
			})

			.catch(error => dispatch(UserdetReqErr(error)));
	};
};