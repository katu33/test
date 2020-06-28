
export interface Article {
    id: string
    title: string;
    author: string;
    publishedAt: string; //date time in ISO format 
    url: string;
    type: ArticleType;
    description?: string;
    featureImgUrl?: string;
}

// export class NormalArticle extends Article {
//     description: string;
// }

// export class FeaturedArticle extends  Article{
//     featureImgUrl: string;
// }

export enum ArticleType {
    NORMAL = "NORMAL",
    FEATURED = "FEATURED",
}