export interface IdInterface {
  id: string
  getValue(): string
  isEqual(other: IdInterface): boolean
}
