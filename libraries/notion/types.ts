import {PropertyMap} from "notion-types";

type MusicAlbumProperties = {
    Name: NotionDbTitle;
}

// export type NotionDbProperty


// properties
export type NotionDbTitle = {
    id: string;
    type: "title";
    title: TitleItem[];
}

export type NotionDbTitle = {
    id: string;
    type: "title";
    title: TitleItem[];
}


// children of properties
type TitleItem = {
    annotations: any;
    href: any;
    plain_text: string;
    text: {
        content: string;
        link: null;
    }
}


