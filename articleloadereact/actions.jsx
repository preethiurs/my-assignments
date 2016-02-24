export const RECEIVE_DATA = 'RECEIVE_DATA';
export function getArticleDetails() {
    return dispatch => {
        return fetch('./ArtcileList.json', {
            method: 'GET',
        })
            .then(response => response.json())
            .then((json) => {
                console.log("before succes ");
                console.log("succces ", json);
                return dispatch(recieveData(json));
            })
            .catch(err => {
                throw err;
            });
    }
}
function recieveData(json) {
    "use strict";
    return {
        type: RECEIVE_DATA,
        data: json
    };
}