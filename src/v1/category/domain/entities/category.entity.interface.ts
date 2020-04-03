export interface CategoryInterface {
  getTitle(): string
  setTitle(title: string): void
  isActive(): boolean
  activate(): void
  disactivate(): void
}