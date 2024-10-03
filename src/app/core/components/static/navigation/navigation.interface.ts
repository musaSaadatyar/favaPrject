export interface INavigationItemParent
{
  label: string;
  route?: string;
  url?: string;
  activePath?: string;
  items?: INavigationItemParent[],
  permission?: string, 
  icon?: string;

}

export interface INavigationItem extends INavigationItemParent
{
  icon?: string;
}
