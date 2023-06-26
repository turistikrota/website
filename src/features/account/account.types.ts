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
  birthDate: string;
};
