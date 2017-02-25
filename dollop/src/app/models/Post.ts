import * as moment from 'moment';

export class Post {
  Title: string;
  Summary: string;
  Tags: string[] = [];
  Content: Content[] = [];
  IsPublic: boolean;
  DatePublished: string;

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
  ImageName: string;

  constructor(type: ContentType, ordinal: number, value: string = undefined, imageName: string = undefined) {
    this.Type = type;
    this.Ordinal = ordinal;
    this.Value = value;
    this.ImageName = imageName;
  }
}

export enum ContentType {
  Header,
  Paragraph,
  Image
}
