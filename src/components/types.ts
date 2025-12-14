// types.ts
export type ApiErrorResponse = {
  error: string;
  message: string;
  status_code: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type UserCreateRequest = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdateRequest = {
  name?: string;
  email?: string;
  password?: string;
};

export type DashboardLayout = 'grid' | 'list';

export type UserListItem = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: string;
};

export type UserListResponse = {
  users: UserListItem[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
  };
};