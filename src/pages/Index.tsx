import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import QuickFacts from '@/components/home/QuickFacts';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import CTABanner from '@/components/home/CTABanner';
import ServicesPreview from '@/components/home/ServicesPreview';
import TownsReference from '@/components/home/TownsReference';
import RecommendedPartner from '@/components/home/RecommendedPartner';
import { DEFAULT_OG_IMAGE, DEFAULT_SITE_DESCRIPTION, DEFAULT_SITE_TITLE, SITE_URL } from '@/seo/titles';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{DEFAULT_SITE_TITLE}</title>
        <meta name="description" content={DEFAULT_SITE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content={DEFAULT_SITE_TITLE} />
        <meta property="og:description" content={DEFAULT_SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="Cape Cod Plumbing Guide" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:title" content={DEFAULT_SITE_TITLE} />
        <meta name="twitter:description" content={DEFAULT_SITE_DESCRIPTION} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Cape Cod Plumbing Guide',
            url: SITE_URL,
            description: 'Free plumbing tips and guides for Cape Cod homeowners',
            about: {
              '@type': 'Place',
              name: 'Cape Cod, Massachusetts',
            },
          })}
        </script>
      </Helmet>
      <Layout>
        <Hero />
        <TrustBar />
        <QuickFacts />
        <FeaturedArticles />
        <CTABanner />
        <ServicesPreview />
        <TownsReference />
        <RecommendedPartner />
      </Layout>
    </>
  );
};

export default Index;
