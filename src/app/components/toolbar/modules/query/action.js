const QUERY = 'QUERY';

export const query = (queryResults) => ({
    type: QUERY,
    queryResults: queryResults
})



export const Query_ASYN = (polygon,key) => (dispatch, getState) => {

    let uRLSearchParams = new URLSearchParams();
    uRLSearchParams.append('polygon', polygon);
    uRLSearchParams.append('keywords', key);
    uRLSearchParams.append('output', 'json');
    uRLSearchParams.append('offset', 20);
    uRLSearchParams.append('page', 1);
    uRLSearchParams.append('key', '5f18940da16191c19251d4bc11b56925');

    return fetch('https://restapi.amap.com/v3/place/polygon?', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: uRLSearchParams
    })
        .then(response => response.json())
        .then(json => dispatch(query(json)));
}