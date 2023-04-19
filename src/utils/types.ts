export interface GridDataItem {
  id: number;
  url: string;
  image: string;
}

export interface LinkProps {
  url?: string;
  text: string;
}

export interface DescriptionItem extends LinkProps {
  label: string;
}

export interface UnorderedListItem extends LinkProps {
  id: number;
  name?: string;
}
