export type Store = LoginResult & {
  status: {
    login: LoadingState;
  };
};

export type LoginDetail = {
  username: string;
  password: string;
};

export type LoginResult = {
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
};
