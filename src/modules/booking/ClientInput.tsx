interface iPropsClienteInput {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  error: string | undefined;
}

const ClientInput = ({ value, onChange, error }: iPropsClienteInput) => {
  return (
    <div className="mb-8 flex flex-col">
      <label
        htmlFor="client-name"
        className="text-xl font-semibold text-zinc-200 mb-4"
      >
        Cliente
      </label>
      <input
        id="client-name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded-lg text-zinc-100 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-600"
        type="text"
        placeholder="Digite o nome do cliente"
      />
      {error && <span className="text-red-400 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default ClientInput;
