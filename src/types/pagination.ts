export type PaginationFilterRequest<T> = {
  page?: number
  limit?: number
  filter: T
}
