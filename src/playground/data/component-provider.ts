import type { ComponentDatasource } from '@/playground/data/datasources/component-datasource'
import type { PlaygroundComponentDefinition } from '@/playground/models'
import jsonComponentDatasource from '@/playground/data/datasources/json-component-datasource'
import { SourceFile } from '@/playground/models'

export class ComponentProvider {
  dataSources: ComponentDatasource[] = []

  constructor(dataSources: ComponentDatasource[]) {
    this.dataSources = dataSources
  }

  async getById(id: string): Promise<PlaygroundComponentDefinition> {
    for (const ds of this.dataSources) {
      try {
        return ds.getById(id)
      }
      catch (e) {}
    }
    throw new Error(`Component ${id} not found`)
  }

  async getAll(): Promise<PlaygroundComponentDefinition[]> {
    const files = await Promise.all(
      this.dataSources.map(async ds => await ds.getAll()))
    return files.flat();
  }

  async getFilesByComponentId(id: string): Promise<SourceFile[]> {
    for (const ds of this.dataSources) {
      try {
        return ds.getFilesByComponentId(id)
      }
      catch (e) {
        console.log(e)
      }
    }
    throw new Error(`Component ${id} not found`)
  }
}

const componentProvider = new ComponentProvider([jsonComponentDatasource])
export default componentProvider