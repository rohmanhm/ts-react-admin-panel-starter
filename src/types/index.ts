/**
 * Convert required type object to optional
 */
export type Optional<T> = { [P in keyof T]?: T[P] }
export type Errors<T> = { [P in keyof T]?: string[] }

export interface IStatusConstantID {
  _id: number
  stringValue: string
}

export interface IFilter {
  page: number
  limit: number
  sort: IFilterSort
  query: string
}

export interface IFilterSort {
  requestDate?: number
  generatedDate?: number
}
