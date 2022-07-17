export default function Button({
  labelDescription = "Button description",
  type = "button",
  onButtonClick = null,
  colorClass = "bg-gray-200",
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className={`bg-gray-200 p-2 m-1 rounded-md ${colorClass}`}
      type={type}
      onClick={handleButtonClick}
    >
      {labelDescription}
    </button>
  );
}
