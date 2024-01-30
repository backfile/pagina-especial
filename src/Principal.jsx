export function Principal({setActivate}){
    return(
        <main className="mainPrincipal">
            <p className="parrafo-rosa">Toca la rosa</p>
            <div className="rosa" onClick={setActivate}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/018/871/769/small/red-rose-isolated-for-valentine-s-day-generative-ai-png.png" alt="" />
            </div>
        </main>
    )
}