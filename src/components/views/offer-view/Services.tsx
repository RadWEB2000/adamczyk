import { OfferServiceCard as Card} from "@/utils/cards";
import type { T_Services } from "@/types/offer-page.types";



export default function Services({services}:T_Services){

    return (
          <ul
              className="grid lg5:grid-cols-2 lg5:grid-rows-[auto_1fr] auto-rows-fr max-lg5:gap-4"
          >
              {
                  services.map(({...item}) => {
                      return (
                          <Card
                              {...item}
                              key={`service-card-${item.title}-${item.subtitle}`}
                          />
                      )
                  })
              }
          </ul>
    )
}