const SEARCH = 'SEARCH';

export const search = (searchResults) => ({
    type: SEARCH,
    searchResults: searchResults
})



export const search_ASYN = key => (dispatch, getState) => {

    let uRLSearchParams = new URLSearchParams();
    uRLSearchParams.append('keywords', key);
    uRLSearchParams.append('output', 'json');
    uRLSearchParams.append('offset', 100);
    uRLSearchParams.append('page', 1);
    uRLSearchParams.append('key', '5f18940da16191c19251d4bc11b56925');
    uRLSearchParams.append('extensions', 'all');

    return fetch('http://restapi.amap.com/v3/place/text?', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: uRLSearchParams
    })
        .then(response => response.json())
        .then(json => dispatch(search(json)));
}