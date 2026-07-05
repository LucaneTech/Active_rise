import { TrendingUp, Megaphone, Palette, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";

const ServicesSection = () => {
    const { t } = useTranslation();

  const services = [
    {
      icon: TrendingUp,
      titleKey: 'home.services.marketing_title',
      subtitle: 'home.services.marketing_subtitle',
      descKey: 'home.services.marketing_desc',
      link: "/marketing",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: Megaphone,
      titleKey: 'home.services.communication_title',
      subtitle: 'home.services.communication_subtitle',
      descKey: 'home.services.communication_desc',
      link: "/communication",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: Palette,
      titleKey: 'home.services.creation_title',
      subtitle: 'home.services.creation_subtitle',
      descKey: 'home.services.creation_desc',
      link: "/creation-web",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: BarChart3,
      titleKey: 'home.services.performance_title',
      subtitle: 'home.services.performance_subtitle',
      descKey: 'home.services.performance_desc',
      link: "/performance-commerciale",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
  ];
    return (
        <section className="section-padding bg-gray-50">
                <div className="container-xl">
                  <SectionTitle
                    badge={t('home.services.badge')}
                    title={t('home.services.title')}
                    titleGold={t('home.services.title2')}
                  />
                  <div className="grid md:grid-cols-2 gap-5 mt-10">
                    {services.map((s, i) => (
                      <ServiceCard
                        key={i}
                        icon={s.icon}
                        title={t(s.titleKey)}
                        subtitle={t(s.subtitle)}
                        description={t(s.descKey)}
                        linkLabel={t('home.services.view_all')}
                        link={s.link}
                        image={s.image}
                        delay={i * 0.08}
                      />
                    ))}
                  </div>
                </div>
              </section>
    )

}

export default ServicesSection