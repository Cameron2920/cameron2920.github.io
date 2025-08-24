export function ImageModal({ openImg, onClose }) {
  if (!openImg) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <img
        src={openImg}
        alt="Enlarged diagram"
        className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
      />
    </div>
  );
}
