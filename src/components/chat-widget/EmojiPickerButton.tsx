import Picker from 'emoji-picker-react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import useEmojiPicker from '../../hooks/useEmojiPicker';

const EmojiPickerButton = ({
  onEmojiPick: handleEmojiPick,
}: {
  onEmojiPick: (emoji: string) => void;
}) => {
  const { pickerRef, toggleEmojiPicker, isOpen, handleEmojiClick } =
    useEmojiPicker(handleEmojiPick);

  return (
    <div>
      <button type="button" onClick={toggleEmojiPicker}>
        <HiOutlineEmojiHappy />
      </button>
      {isOpen && (
        <div ref={pickerRef}>
          <Picker
            onEmojiClick={handleEmojiClick}
            disableSkinTonePicker={true}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerButton;
