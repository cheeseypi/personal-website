export enum HeaderLinkType {
  link,
  page
}

export interface HeaderLink {
  name: string;
  type: HeaderLinkType;
  href: string;
}

