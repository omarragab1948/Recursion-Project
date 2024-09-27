export interface IMenuItem  {
    image?: string;
    title?: string;
    hasChildren?: boolean;
    children?: IMenuItem[];
  };
  
  export interface IOpenMenus  {
    [key: string]: boolean;
  };