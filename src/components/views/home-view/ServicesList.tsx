import type { T_ServicesList } from "@/ts/home-page.types"
import { HomeServiceCard as Card} from "@/utils/cards"

export default function ServicesList({cards}:T_ServicesList){
    return (
        <div>
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)] minh-256 bg-blue-700/0 mx-auto space-y-3">
                {
                    cards.map((card) => {
                        return (
                            <Card
                                {...card}
                                key={`main-service-card-${card.title}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}