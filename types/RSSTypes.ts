// These are the types generated from our blog's RSS feed at https://www.itmagination.com/blog/rss.xml

export interface RSS {
    channel: Channel;
    _version: string;
    "_xmlns:atom": string;
    "_xmlns:media": string;
}

export interface Channel {
    title: string;
    link: Array<LinkClass | string>;
    description: string;
    pubDate: string;
    ttl: string;
    generator: string;
    item: Item[];
}

export interface Item {
    id: number;
    title: string;
    link: string;
    description: string;
    publishedAt: string;
    imageUrl: string;
    thumbnailUrl: string;
}

export interface Content {
    _url: string;
    _medium: Medium;
    __prefix: Prefix;
}

export enum Prefix {
    Media = "media",
}

export enum Medium {
    Image = "image",
}

export interface Thumbnail {
    _url: string;
    __prefix: Prefix;
}

export interface LinkClass {
    _href: string;
    _rel: string;
    _type: string;
    __prefix: string;
}

export const initialItemState: Item = {
    id: 1,
    title: "",
    link: "",
    description: "",
    publishedAt: "",
    imageUrl: "",
    thumbnailUrl: ""
}