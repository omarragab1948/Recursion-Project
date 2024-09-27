export interface ICategory  {
  id: string;
  name: string;
  subCategory: ICategory | null; 
};

export interface IReply  {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  replies: IReply[]; 
};

export interface IComment  {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  replies: IReply[];
};

export interface IProduct  {
  id: number;
  name: string;
  image: string;
  category: ICategory;
  description: string;
  comments: IComment[];
};