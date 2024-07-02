
export const Header = () => {
    return (
        <div className="p-4 flex justify-between items-center">
            <img src="/logo.png" width={90} height={40}/>
            <input type="text" placeholder="Cari Zakat Penghasilan" className="border rounded-lg p-3"/>
            <div>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 1H2.63568C3.14537 1 3.59138 1.34265 3.7227 1.83513L4.1059 3.27209M6.5 12.25C4.84315 12.25 3.5 13.5931 3.5 15.25H19.25M6.5 12.25H17.7183C18.8394 9.94936 19.8177 7.56635 20.6417 5.1125C15.88 3.89646 10.8905 3.25 5.75 3.25C5.20021 3.25 4.65214 3.2574 4.1059 3.27209M6.5 12.25L4.1059 3.27209M5 18.25C5 18.6642 4.66421 19 4.25 19C3.83579 19 3.5 18.6642 3.5 18.25C3.5 17.8358 3.83579 17.5 4.25 17.5C4.66421 17.5 5 17.8358 5 18.25ZM17.75 18.25C17.75 18.6642 17.4142 19 17 19C16.5858 19 16.25 18.6642 16.25 18.25C16.25 17.8358 16.5858 17.5 17 17.5C17.4142 17.5 17.75 17.8358 17.75 18.25Z" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
        </div>
    )
}