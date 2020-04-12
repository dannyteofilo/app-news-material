export interface CardData {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content?: string;
    source?: {
        id: any;
        name: string;
    };
}