function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const options = body ? {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  } : null;

  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then(error => {
      const e = new Error('ошибка');
      e.data = error;
      throw e;
    });
  });
}

export {
  sendRequest
};