'use client';

import { FaqSection } from '@/app/components/quland/FaqSection';
import { FeatureSection } from '@/app/components/quland/FeatureSection';
import { HeroService } from '@/app/components/quland/HeroService';
import { services } from 'config/services';
import { useParams } from 'next/navigation';
import { NotFound } from 'components/quland/NotFound';

function ServicesPage() {
  const { service_id } = useParams() as { service_id: string };
  const service = services?.find(service => service.id === service_id);

  if (!service)
    return <NotFound title="Service not found" subtitle="The service you are looking for does not exist." />;

  return (
    <div>
      <HeroService service={service} />
      <FeatureSection />
      <FaqSection />
    </div>
  );
}

export default ServicesPage;
