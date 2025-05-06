import type { PlaygroundComponentDefinition } from '@/playground/models'
import { SourceFile } from '@/playground/models'

export interface ComponentDatasource {
  getById(id: string): Promise<PlaygroundComponentDefinition>
  getFilesByComponentId(id: string): Promise<SourceFile[]>
  getAll(): Promise<PlaygroundComponentDefinition[]>
}