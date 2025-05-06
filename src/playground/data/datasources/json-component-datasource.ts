import type { ComponentDatasource } from '@/playground/data/datasources/component-datasource'
import type { PlaygroundComponentDefinition } from '@/playground/models'
import { SourceFile } from '@/playground/models'
import { axiosInstance } from '@/axios/axios-instance'

export class JsonComponentDatasource implements ComponentDatasource {
  static components: PlaygroundComponentDefinition[] = [{
    "name": "handwrite",
    "id": "handwrite",
    "files": ["handwrite.html", "handwrite.css"]
  }, {
    "name": "underlined tabs",
    "id": "underlined-tabs",
    "files": ["index.html", "style.css", "main.js"]
  }]



  getById(id: string): Promise<PlaygroundComponentDefinition> {
    const res = JsonComponentDatasource.components.find(c => c.id === id)
    if(!res) throw new Error('Component not found')

    return Promise.resolve(res)
  }

  getAll(): Promise<PlaygroundComponentDefinition[]> {
    return Promise.resolve(JsonComponentDatasource.components)
  }

  getFilesByComponentId(id: string): Promise<SourceFile[]> {
    const res = JsonComponentDatasource.components.find(c => c.id === id)
    if(!res) throw new Error(`Component ${id} not found`)

    return Promise.all(res.files.map(async file => this.getFileByName(res.id, file)))
  }

  async getFileByName(componentId: string, filename: string): Promise<SourceFile> {
    const id = `${componentId}/${filename}`
    const response = await axiosInstance.get(id)
    return new SourceFile(response.data, filename, id)
  }
}

const jsonComponentDatasource = new JsonComponentDatasource()
export default jsonComponentDatasource