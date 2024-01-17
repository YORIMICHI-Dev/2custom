export type RegisterRequestBody = {
    email: string,
    password: string,
    passwordConfirm: string
  };

  export type RegisterResponse = {
    token: string
  };

  export type LoginRequestBody = {
    email: string,
    password: string
  };

  export type LoginResponse = {
    token: string
  };
