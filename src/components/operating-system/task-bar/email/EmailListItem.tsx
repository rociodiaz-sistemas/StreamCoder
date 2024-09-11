import React, { useState } from 'react';
import { Flex, Text, IconButton, Box } from '@chakra-ui/react';
import RecycleBinIcon from '../../../../assets/icons/recycle-bin.svg';
import RecycleBinHoveredIcon from '../../../../assets/icons/recycle-bin-filled.svg';
import StarIcon from '../../../../assets/icons/favourite-star.svg';
import StarIconFilled from '../../../../assets/icons/favourite-star-filled.svg';

interface EmailListItemProps {
  name: string;
  date: string;
  time: string;
}

const EmailListItem: React.FC<EmailListItemProps> = ({ name, date, time }) => {
  const [deleteIconHovered, setDeleteIconHovered] = useState(false);
  const [starIconHovered, setStarIconHovered] = useState(false);

  return (
    <Box
      bgColor="white"
      height="25px"
      width="100%"
      borderRadius="8px"
      padding={2}
    >
      <Flex
        direction="row"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text flexBasis="50%">{name}</Text>
        <Text flexBasis="30%">{date}</Text>
        <Text flexBasis="30%">{time}</Text>
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
          />
          <IconButton
            aria-label="favorite"
            icon={
              starIconHovered ? (
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
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default EmailListItem;
