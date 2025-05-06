export class SourceFile {
  data: string;
  filename: string;
  id: string

  constructor(data: string, filename: string, id: string) {
    this.filename = filename;
    this.data = data;
    this.id = id
  }


  getExtension() {
    return this.filename.split('.').pop();
  }

  getLanguage() {
    switch (this.getExtension()) {
      case 'html':
        return 'html'
      case 'css':
        return 'css'
      case 'js':
        return 'javascript'
      default:
        return 'plaintext'
    }
  }


}

export type PlaygroundComponentDefinition = {
  name: string;
  id: string;
  files: string[];
}