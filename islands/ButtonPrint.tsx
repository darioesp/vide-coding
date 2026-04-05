const ButtonPrint = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      aria-label="Imprimir"
      className="group"
    >
      <span class="text-nowrap inline-block py-2">
        <small class="text-base group-hover:underline">imprimir</small>{" "}
        <span class="hidden lg:inline">
          <kbd>cmd</kbd>+<kbd>P</kbd>
        </span>
      </span>
    </button>
  );
};

export default ButtonPrint;
