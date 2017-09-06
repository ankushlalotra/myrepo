import 'whatwg-fetch';
export const SEARCH_REQ_START = 'SEARCH_REQ_START';
export const SEARCH_REQ_ERR = 'SEARCH_REQ_ERR';
export const SEARCH_REQ_SUCCESS = 'SEARCH_REQ_SUCCESS';
console.log("doSEARCHcalled");
function SEARCHReqStart() {
	return {
		type: SEARCH_REQ_START
	};
};

function SEARCHReqErr(payload) {
	return {
		type: SEARCH_REQ_ERR,
		message: payload
	};
};

function SEARCHReqSuccess(res) {
	return {
		type: SEARCH_REQ_SUCCESS,
		payload: res
	};
};

export function doSearchReq(params) {
	var p=JSON.parse(params);
	console.log(p);
	return (dispatch, state) => {
		
		dispatch(SEARCHReqStart());
				return fetch('http://127.0.0.1:8080/Users/filter', {
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

					return dispatch(SEARCHReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(SEARCHReqErr(res));
				}
			})

			.catch(error => dispatch(SEARCHReqErr(error)));
	};
};