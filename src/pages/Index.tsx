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
import { SITE_URL } from '@/seo/titles';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cape Cod Plumber — Local Plumbing Tips & Resources</title>
        <meta
          name="description"
          content="Free plumbing tips and guides for Cape Cod homeowners. Frozen pipes, drain cleaning, water heaters, and more. From Falmouth to Provincetown."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Cape Cod Plumber — Local Plumbing Tips & Resources" />
        <meta property="og:description" content="Free plumbing tips and guides for Cape Cod homeowners. Frozen pipes, drain cleaning, water heaters, and more. From Falmouth to Provincetown." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="Cape Cod Plumbing Guide" />
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
