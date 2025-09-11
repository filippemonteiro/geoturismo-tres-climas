import React from 'react';

interface ImageModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-screen object-contain" />
      </div>
    </div>
  );
};