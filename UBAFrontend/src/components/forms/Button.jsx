export function Button({text, color, onButton}){
    return <div className="flex">
        <button onClick={onButton} className={`w-full font-comfortaa rounded-lg h-10 mt-5 text-white ${color}`}>{text}</button>
    </div>
}