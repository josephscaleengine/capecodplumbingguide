export const SITE_URL = 'https://capecodplumbingresources.com';
export const DEFAULT_SITE_TITLE = 'Cape Cod Plumber — Local Plumbing Tips & Resources';
export const DEFAULT_SITE_DESCRIPTION = 'Free plumbing tips and guides for Cape Cod homeowners. Frozen pipes, drain cleaning, water heaters, and more. From Falmouth to Provincetown.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cape-cod-hero.jpg`;

const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim();

export const trimMetaDescription = (value: string, maxLength = 155) => {
  const normalized = normalizeText(value);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
};

export const ensureCapeCodDescription = (value: string, maxLength = 155) => {
  const normalized = normalizeText(value);
  const withCapeCod = /cape cod/i.test(normalized)
    ? normalized
    : `${normalized.replace(/[.!?]+$/, '')}. Cape Cod homeowners guide.`;

  return trimMetaDescription(withCapeCod, maxLength);
};

export const buildArticleSeoTitle = (articleTitle: string) => `${articleTitle} — Cape Cod Plumbing Guide`;

export const buildArticleSeoDescription = (summary: string) => ensureCapeCodDescription(summary);

export const buildServiceSeoTitle = (serviceName: string) => `${serviceName} — Cape Cod Plumbing Guide`;

export const buildServiceSeoDescription = (serviceName: string) =>
  trimMetaDescription(
    `Learn about ${serviceName.toLowerCase()} on Cape Cod. What it involves, when you need it, typical costs, and local professional recommendations.`
  );
