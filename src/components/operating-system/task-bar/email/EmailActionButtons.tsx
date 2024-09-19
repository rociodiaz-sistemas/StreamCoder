import React, { useState } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import RecycleBinIcon from '../../../../assets/icons/recycle-bin.svg';
import RecycleBinHoveredIcon from '../../../../assets/icons/recycle-bin-filled.svg';
import StarIcon from '../../../../assets/icons/favourite-star.svg';
import StarIconFilled from '../../../../assets/icons/favourite-star-filled.svg';

interface EmailActionButtonsProps {
  isFavorite?: boolean;
  onDelete?: () => void;
  onFavoriteToggle?: () => void;
}

const EmailActionButtons: React.FC<EmailActionButtonsProps> = ({
  isFavorite,
  onDelete,
  onFavoriteToggle,
}) => {
  const [deleteIconHovered, setDeleteIconHovered] = useState(false);
  const [starIconHovered, setStarIconHovered] = useState(false);

  return (
    <Flex gap="10px">
      <IconButton
        aria-label="delete"
        icon={
          deleteIconHovered ? (
            <img
              style={{ width: '17px', height: '17px' }}
              src={RecycleBinHoveredIcon}
              alt="recycle-bin-icon-hovered"
            />
          ) : (
            <img
              style={{ width: '17px', height: '17px' }}
              src={RecycleBinIcon}
              alt="recycle-bin-icon"
            />
          )
        }
        onMouseEnter={() => setDeleteIconHovered(true)}
        onMouseLeave={() => setDeleteIconHovered(false)}
        onClick={onDelete}
      />
      <IconButton
        aria-label="favorite"
        icon={
          starIconHovered || isFavorite ? (
            <img
              style={{ width: '17px', height: '17px' }}
              src={StarIconFilled}
              alt="star-icon-hovered"
            />
          ) : (
            <img
              style={{ width: '17px', height: '17px' }}
              src={StarIcon}
              alt="star-icon"
            />
          )
        }
        onMouseEnter={() => setStarIconHovered(true)}
        onMouseLeave={() => setStarIconHovered(false)}
        onClick={onFavoriteToggle}
      />
    </Flex>
  );
};

export default EmailActionButtons;
