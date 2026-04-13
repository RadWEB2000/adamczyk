import { OfferServiceCard as Card} from "@/utils/cards";
import seo_img from "@/img/peoples/beautiful-young-woman-sitting-home-with-digital-tablet.png"
import aeo_img from "@/img/peoples/handsome-man-with-sequin-jacket-shouting-by-megaphone.png"
import www_img from "@/img/peoples/handsome-brunette-man-with-beard-with-laptop.png"
import rpa_img from "@/img/peoples/portrait-woman-using-tablet-device.png"
import ppc_img from "@/img/peoples/technology-displaying-screen-success-chair.png"
import type { T_OfferServiceCard } from "@/ts/card.types";

export const offer: Array<T_OfferServiceCard> = [
  {
    title: "SEO",
    subtitle: "Budowanie widoczności w Google",
    content:
      "Projektuję kompleksowe strategie SEO oparte na danych, architekturze informacji, topical authority oraz technicznych fundamentach serwisu. Pomagam markom zwiększać ruch organiczny, zdobywać wartościowe frazy sprzedażowe, rozwijać widoczność lokalną i skalować obecność w Google w sposób odporny na zmiany algorytmów. Łączę audyty techniczne, content SEO, link building oraz optymalizację doświadczenia użytkownika, aby SEO realnie wspierało wzrost leadów, sprzedaży i przewagi konkurencyjnej.",
    button: {
      href: "/oferta/seo",
      label: "Zobacz usługę SEO",
    },
    subservices: [
      { label: "Audyt SEO", href: "/oferta/seo/audyt" },
      { label: "Technical SEO", href: "/oferta/seo/technical-seo" },
      { label: "Link building", href: "/oferta/seo/link-building" },
      { label: "Content SEO", href: "/oferta/seo/content-seo" },
      { label: "Topical authority", href: "/oferta/seo/topical-authority" },
      { label: "SEO lokalne", href: "/oferta/seo/lokalne" },
      { label: "SEO dla e-commerce", href: "/oferta/seo/ecommerce" },
      { label: "SEO programmatic", href: "/oferta/seo/programmatic" },
      { label: "Migracje SEO", href: "/oferta/seo/migracje" },
      { label: "Core Web Vitals", href: "/oferta/seo/core-web-vitals" },
    ],
    image: {
      ...seo_img,
      alt: "Usługa SEO i wzrost widoczności w Google",
      title: "",
    },
  },

  {
    title: "AEO",
    subtitle: "Widoczność w AI i systemach odpowiedzi",
    content:
      "Optymalizuję treści, strukturę informacji, encje i relacje semantyczne pod AI Overviews, ChatGPT, Perplexity oraz nowoczesne systemy odpowiedzi generatywnych. Buduję obecność marki w środowisku zero-click search, gdzie użytkownik oczekuje natychmiastowej, precyzyjnej odpowiedzi. Wdrażam strategie entity SEO, structured data, FAQ optimization oraz content answer-first, które zwiększają szansę na cytowanie marki przez modele AI i wyszukiwarki nowej generacji.",
    button: {
      href: "/oferta/aeo",
      label: "Zobacz usługę AEO",
    },
    subservices: [
      { label: "AI Overviews", href: "/oferta/aeo/ai-overviews" },
      { label: "Entity SEO", href: "/oferta/aeo/entity-seo" },
      { label: "Semantic content", href: "/oferta/aeo/semantic-content" },
      { label: "FAQ optimization", href: "/oferta/aeo/faq-optimization" },
      { label: "Zero-click visibility", href: "/oferta/aeo/zero-click" },
      { label: "Structured data", href: "/oferta/aeo/structured-data" },
      { label: "Knowledge graph", href: "/oferta/aeo/knowledge-graph" },
      { label: "Entity linking", href: "/oferta/aeo/entity-linking" },
      { label: "LLM visibility", href: "/oferta/aeo/llm-visibility" },
      { label: "AI content clusters", href: "/oferta/aeo/ai-clusters" },
    ],
    image: {
      ...aeo_img,
      alt: "Optymalizacja pod AI Overviews i systemy odpowiedzi",
      title: "",
    },
  },

  {
    title: "Strony internetowe",
    subtitle: "Szybkie strony zaprojektowane pod SEO i konwersję",
    content:
      "Tworzę nowoczesne strony internetowe w Next.js i WordPress, które łączą szybkość działania, wysoką estetykę oraz realne wsparcie wzrostu biznesowego. Każdy projekt buduję z myślą o SEO, Core Web Vitals, UX, CRO i skalowalnej architekturze treści. Dzięki temu serwisy nie tylko dobrze wyglądają, ale przede wszystkim zdobywają ruch, wspierają widoczność w Google i zwiększają liczbę zapytań oraz konwersji.",
    button: {
      href: "/oferta/strony-internetowe",
      label: "Zobacz usługę tworzenia stron",
    },
    subservices: [
      { label: "Strony firmowe", href: "/oferta/strony-internetowe/firmowe" },
      { label: "Landing page", href: "/oferta/strony-internetowe/landing-page" },
      { label: "Next.js", href: "/oferta/strony-internetowe/nextjs" },
      { label: "Headless WordPress", href: "/oferta/strony-internetowe/headless-wordpress" },
      { label: "UX i CRO", href: "/oferta/strony-internetowe/ux-cro" },
      { label: "Core Web Vitals", href: "/oferta/strony-internetowe/cwv" },
      { label: "Migracje stron", href: "/oferta/strony-internetowe/migracje" },
      { label: "Portale contentowe", href: "/oferta/strony-internetowe/portale" },
      { label: "Blogi SEO", href: "/oferta/strony-internetowe/blogi" },
      { label: "Sklepy internetowe", href: "/oferta/strony-internetowe/sklepy" },
    ],
    image: {
      ...www_img,
      alt: "Nowoczesne strony internetowe zoptymalizowane pod SEO",
      title: "",
    },
  },

  {
    title: "RPA",
    subtitle: "Automatyzacja procesów biznesowych",
    content:
      "Projektuję systemy automatyzacji procesów biznesowych, które redukują czas wykonywania powtarzalnych zadań, usprawniają przepływ danych i zwiększają skalowalność operacyjną firmy. Łączę workflow automation, integracje API, raportowanie, CRM i AI workflows, aby ograniczyć koszty manualnej pracy oraz poprawić szybkość działania zespołów marketingowych, sprzedażowych i operacyjnych.",
    button: {
      href: "/oferta/rpa",
      label: "Zobacz usługę RPA",
    },
    subservices: [
      { label: "Automatyzacje CRM", href: "/oferta/rpa/crm" },
      { label: "Lead automation", href: "/oferta/rpa/lead-automation" },
      { label: "Raportowanie", href: "/oferta/rpa/reporting" },
      { label: "AI workflows", href: "/oferta/rpa/ai-workflows" },
      { label: "Integracje API", href: "/oferta/rpa/api" },
      { label: "Google Sheets automation", href: "/oferta/rpa/google-sheets" },
      { label: "Marketing automation", href: "/oferta/rpa/marketing" },
      { label: "Web scraping", href: "/oferta/rpa/web-scraping" },
      { label: "Monitoring danych", href: "/oferta/rpa/monitoring" },
      { label: "Powiadomienia i alerty", href: "/oferta/rpa/alerty" },
    ],
    image: {
      ...rpa_img,
      alt: "Automatyzacje procesów biznesowych RPA",
      title: "",
    },
  },

  {
    title: "PPC",
    subtitle: "Płatne kampanie generujące leady i sprzedaż",
    content:
      "Tworzę kampanie PPC skoncentrowane na jakości ruchu, rentowności i wzroście konwersji. Łączę Google Ads, remarketing, Performance Max, landing pages oraz analitykę kampanii, aby wspierać SEO i budować pełny ekosystem pozyskiwania leadów. Kampanie projektuję w oparciu o dane, intencję użytkownika i ścieżki konwersji, dzięki czemu reklama realnie wspiera wzrost sprzedaży.",
    button: {
      href: "/oferta/ppc",
      label: "Zobacz usługę PPC",
    },
    subservices: [
      { label: "Google Ads", href: "/oferta/ppc/google-ads" },
      { label: "Remarketing", href: "/oferta/ppc/remarketing" },
      { label: "Performance Max", href: "/oferta/ppc/performance-max" },
      { label: "Landing pages", href: "/oferta/ppc/landing-pages" },
      { label: "Analityka kampanii", href: "/oferta/ppc/analityka" },
      { label: "Meta Ads", href: "/oferta/ppc/meta-ads" },
      { label: "Lead generation", href: "/oferta/ppc/lead-generation" },
      { label: "E-commerce Ads", href: "/oferta/ppc/ecommerce" },
      { label: "Audyt kampanii", href: "/oferta/ppc/audyt" },
      { label: "Optymalizacja ROAS", href: "/oferta/ppc/roas" },
    ],
    image: {
      ...ppc_img,
      alt: "Kampanie PPC i Google Ads",
      title: "",
    },
  },
];

export default function Services(){

    return (
          <ul
              className="grid lg5:grid-cols-2 lg5:grid-rows-[auto_1fr] auto-rows-fr max-lg5:gap-4"
          >
              {
                  offer.map(({...item}) => {
                      return (
                          <Card
                              {...item}
                          />
                      )
                  })
              }
          </ul>
    )
}