export interface INavigationItemParent
{
  title: string;
  path?: string;
  activePath?: string;
  items?: INavigationItemParent[],
  permission?: string
}

export interface INavigationItem extends INavigationItemParent
{
  iconClass?: string;
}
