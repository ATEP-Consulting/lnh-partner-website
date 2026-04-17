import { sanity } from './sanity';

export const siteConfigQuery = /* groq */ `
  *[_type == "siteConfig" && _id == "siteConfig"][0]{
    name,
    tagline,
    description,
    url,
    logo,
    phone,
    phoneHref,
    email,
    emailHref,
    address,
    instagram,
    linkedin,
    facebook,
    partnerName,
    partnerUrl,
    navLinks
  }
`;

export const homePageQuery = /* groq */ `
  *[_type == "homePage" && _id == "homePage"][0]{
    title,
    sections[]{
      ...,
      _type,
      _key,
    }
  }
`;

export async function getSiteConfig() {
  return sanity.fetch(siteConfigQuery);
}

export async function getHomePage() {
  return sanity.fetch(homePageQuery);
}

export type SiteConfig = {
  name: string;
  tagline?: string;
  description?: string;
  url?: string;
  logo?: any;
  phone?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
  address?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  partnerName?: string;
  partnerUrl?: string;
  navLinks?: { _key: string; label: string; href: string }[];
};

export type Section = {
  _type: string;
  _key: string;
  visible?: boolean;
  [k: string]: any;
};

export type HomePage = {
  title?: string;
  sections?: Section[];
};
