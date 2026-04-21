import {Author, Brand, Menu} from "@/layout/footer"

export default function Footer(){
    return (
        <footer
            className="min-h-[65vh] bg-brand-950 pt-12 pb-6 text-neutral-50"
        >
            <Menu/>
            <Brand/>
            <Author/>
        </footer>
    )
}