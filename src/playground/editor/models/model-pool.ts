import { editor } from 'monaco-editor'

export class ModelPool {
  private models: Map<string, editor.ITextModel> = new Map()

  constructor() {}

  set(id: string, model: editor.ITextModel) {
    if(!this.models.has(id)) {
      this.models.get(id)?.dispose()
    }
    this.models.set(id, model)
  }

  get(id: string) {
    return this.models.get(id)
  }

}

const poolInstance = new ModelPool()
export default poolInstance