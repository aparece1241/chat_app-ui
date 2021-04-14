const apiRequest = async (url, method='GET', props=null) => {
    let baseUrl = 'https://mstalk.herokuapp.com';
    
    let options = {
        method: method
    };

    if(props) {
        options['body'] = JSON.stringify(props);
        options['headers'] = {'Content-Type': 'application/json'}
    }

    
    let fetchedData = await fetch(`${baseUrl}${url}`, options)
    let resObj = await fetchedData.json();

    return resObj;
}

export default apiRequest;