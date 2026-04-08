export default function Search(){
    return (
        <div className="flex flex-col">
            <label htmlFor="search">Szukaj wpisu</label>
            <input 
            className="bg-neutral-500 w-full px-5 py-3 active:bg-neutral-600 focus:bg-neutral-600"
            type="text" id="search" placeholder="Wpisz tutaj" name="search" />
        </div>
    )
}