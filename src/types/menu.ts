export interface IMenuItem {
    title: string;
    image: string;
    hasChildren?: boolean;
    children?: IMenuItem[];
}