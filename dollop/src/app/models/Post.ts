export class Post {
  Title: string;
  Summary: string;
  Tags: string[];
  Content: Content[];

  constructor(title: string = undefined, summary: string = undefined, tags: string[] = [], content: Content[] = []) {
    this.Title = title;
    this.Summary = summary;
    this.Tags = tags;
    this.Content = content;
  }
}

export class Content {
  Type: ContentType;
  Value: string;
  Ordinal: number;

  constructor(type: ContentType, ordinal: number, value: string = undefined) {
    this.Type = type;
    this.Ordinal = ordinal;
    this.Value = value;
  }
}

export enum ContentType {
  Header,
  Paragraph
}
