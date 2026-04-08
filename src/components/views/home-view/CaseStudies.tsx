import {CaseStudiesSection as Section, CaseStudiesList as List} from "@/views/home-view";

import { PrimaryLinkButton as Button} from "@/utils/buttons";

export default function CaseStudies(){
    
    return ( 
        <div>
            <Section/>
            <List/>
            <div className="page-section-width mx-auto grid">
                  <Button
                href="/case-studies"
                label="Wszystkie sukcesy"
                theme="dark"
            />
            </div>
        </div>
      
    )
}