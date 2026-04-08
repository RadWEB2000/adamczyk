import { FilterTerms as Filter, Search, SortTerms as Sort} from "@/utils/ui";


const categories = [
    'SEO', 'AEO', 'Strony internetowe', 'PPC', 'RPA'
]

const topic = [
    'Linkowanie zewnęntrzne', 'Linkowanie wewnętrzne', 'Audyt SEO', 'Optymalizacja treści', 'Optymalizacja techniczna', 'Optymalizacja UX', 'Optymalizacja konwersji', 'Content marketing', 'E-commerce SEO', 'SEO lokalne', 'SEO międzynarodowe', 'SEO dla WordPressa', 'SEO dla Shopify', 'SEO dla WooCommerce', 'SEO dla Magento', 'SEO dla PrestaShop', 'SEO dla Wix', 'SEO dla Squarespace', 'SEO dla Joomla', 'SEO dla Drupal', 'SEO dla TYPO3', 'SEO dla Ghost', 'SEO dla Webflow', 'SEO dla Weebly', 'SEO dla BigCommerce', 'SEO dla Volusion', 'SEO dla 3dcart', 'SEO dla OpenCart', 'SEO dla Zen Cart', 'SEO dla osCommerce', 'SEO dla Magento 2', 'SEO dla PrestaShop 1.7', 'SEO dla WooCommerce 4.x', 'SEO dla Shopify Plus'
]

export default function ControlPanel(){
    return (
        <aside
            className=" bg-neutral-300/0 sticky top-28 self-start texjt-white"
        >
            <form method="get">
                <span className="block h-0.5 w-full bg-brand-700 mb-3" />
                <Sort/>
                <span className="block h-0.5 w-full bg-brand-700 my-3" />
                <Filter
                    title="Kategorie"
                    terms={categories}
                    type="primary"
                />
                <span className="block h-0.5 w-full bg-brand-700 my-3" />
                <Filter
                    title="Tematy"
                    terms={topic}
                    type="secondary"
                />
                <span className="block h-0.5 w-full bg-brand-700 mt-3" />
            </form>
        </aside>
    )
}