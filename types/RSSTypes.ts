// These are the types generated from our blog's RSS feed at https://www.itmagination.com/blog/rss.xml

export interface RSS {
    channel:        Channel;
    _version:       string;
    "_xmlns:atom":  string;
    "_xmlns:media": string;
}

export interface Channel {
    title:       string;
    link:        Array<LinkClass | string>;
    description: string;
    pubDate:     string;
    ttl:         string;
    generator:   string;
    item:        Item[];
}

export interface Item {
    title:       string;
    link:        string;
    guid:        string;
    description: string;
    pubDate:     string;
    content:     Content;
    thumbnail:   Thumbnail;
}

export interface Content {
    _url:     string;
    _medium:  Medium;
    __prefix: Prefix;
}

export enum Prefix {
    Media = "media",
}

export enum Medium {
    Image = "image",
}

export interface Thumbnail {
    _url:     string;
    __prefix: Prefix;
}

export interface LinkClass {
    _href:    string;
    _rel:     string;
    _type:    string;
    __prefix: string;
}

export const initialItemState: Item  = {
    title: "",
    link: "",
    guid: "",
    description: "",
    pubDate: "",
    content: {
      _url: "",
      _medium: Medium.Image,
      __prefix: Prefix.Media,
    },
    thumbnail: {
      _url: "",
      __prefix: Prefix.Media,
    },
}