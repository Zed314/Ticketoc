class AuthHelpers {
  static getToken(w) {
    if (w.location.hash.indexOf('token') < 0) return null;
    const passedParameters = w.location.hash.substring(1).split('&').map(e => {
      return {
        key: e.substr(0, e.indexOf('=')),
        value: e.substr(e.indexOf('=')+1, e.length)
      }
    });

    let tokenParam = null;
    for (var i = passedParameters.length - 1; i >= 0; i--) {
      if (passedParameters[i].key === 'token') {
        tokenParam = passedParameters[i];
      }
    }

    if (tokenParam === null) return null;
    return tokenParam.value;
  }

  static getInfo(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}

export default AuthHelpers