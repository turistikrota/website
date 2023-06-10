export type UserAccount = {
  avatar: string;
  code: string;
  name: string;
};

export type UserOwner = {
  accountCode: string;
  accountName: string;
  nickName: string;
  roles: string[];
  uuid: string;
};

export type User = {
  accounts: UserAccount[];
  owners: UserOwner[];
  roles: string[];
  uuid: string;
  email: string;
};

export function isUser(arg: any): arg is User {
  return (
    arg &&
    arg.accounts !== undefined &&
    arg.owners !== undefined &&
    arg.roles !== undefined &&
    arg.uuid !== undefined &&
    arg.email !== undefined
  );
}
