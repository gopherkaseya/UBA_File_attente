export function Input({ type, name, placeholder, label, value, onChange }) {
    return (
        <div className="p-3">
            <label htmlFor={name} className="block text-sm/6 text-black font-comfortaa">
                {label}
            </label>
            <input
                type={type}
                name={name} // 🔹 Ajout de name
                placeholder={placeholder}
                value={value} // 🔹 Ajout de value
                onChange={onChange} // 🔹 Ajout de onChange
                className="outline-none border-b-2 w-full border-b-customeGray"
            />
        </div>
    );
}
