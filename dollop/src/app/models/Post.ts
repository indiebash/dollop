export class Post {
  Title: string;
  Summary: string;
  Tags: string[];
  Content: Content[];
  IsPublic: boolean;

  constructor(title: string = undefined, summary: string = undefined, tags: string[] = [], content: Content[] = [], isPublic: boolean = false) {
    this.Title = title;
    this.Summary = summary;
    this.Tags = tags;
    this.Content = content;
    this.IsPublic = isPublic;
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
