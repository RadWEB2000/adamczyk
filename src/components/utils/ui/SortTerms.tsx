export default function SortTerms(){
    return (
        <div>
            <h4 
                className="text-lg font-extrabold font-heading uppercase"
            >Sortuj</h4>
            <div
                className="grid grid-cols-2"
            >
                <div className="space-x-2 select-none">
                    <input className="accent-accent-500 cursor-pointer" type="radio" name="sort" id="sort-asc" />
                    <label className="text-sm uppercase select-none font-semibold font-ui cursor-pointer" htmlFor="sort-asc">Najnowsze</label>
                </div>
                <div className="space-x-2 select-none">
                    <input className="accent-accent-500 cursor-pointer" type="radio" name="sort" id="sort-desc" />
                    <label className="text-sm uppercase select-none font-semibold font-ui cursor-pointer" htmlFor="sort-desc">Najstarsze</label>
                </div>
            </div>
        </div>
    )
}