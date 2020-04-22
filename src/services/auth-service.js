import Http from './http-service'

class AuthService {
  static login(body) {
    return Http.post(`${process.env.REACT_APP_AUTH_SERVICE_URL}/api/users/sign-in`, body)
  }
}

export default AuthService;
