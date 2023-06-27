export type AccountListItem = {
  avatarUrl: string;
  completedRate: number;
  createdAt: string;
  description: string;
  fullName: string;
  isActive: boolean;
  isVerified: boolean;
  userCode: string;
  userName: string;
};

export type Account = {
  userName: string;
  fullName: string;
  avatarUrl: string;
  description: string;
  social: AccountSocial[];
  isActive: boolean;
  completedRate: number;
  isVerified: boolean;
  birthDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AccountSocial = {
  platform: string;
  url: string;
};

export function isAccount(response: any): response is Account {
  return (
    response &&
    response.userName &&
    response.fullName !== undefined &&
    response.avatarUrl !== undefined &&
    response.description !== undefined &&
    response.social !== undefined &&
    response.isActive !== undefined &&
    response.completedRate !== undefined &&
    response.isVerified !== undefined &&
    response.birthDate !== undefined &&
    response.createdAt !== undefined &&
    response.updatedAt !== undefined
  );
}

export type AccountListResponse = AccountListItem[];

export function isAccountListResponse(
  response: any
): response is AccountListResponse {
  return Array.isArray(response);
}

export type AccountCreateFormData = {
  userName: string;
};

export type BaseOperationFormData = {
  userName: string;
};

export type AccountUpdateFormData = {
  userName: string;
  fullName: string;
  description: string;
  birthDate: string | null;
};
