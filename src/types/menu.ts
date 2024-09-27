export interface IMenuItem {
    title: string;
    hasChildren?: boolean;
    children?: IMenuItem[];
}