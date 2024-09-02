import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import './email.css';
import RecycleBinIcon from '../../../../assets/icons/recycle-bin.svg';
import RecycleBinHoveredIcon from '../../../../assets/icons/recycle-bin-filled.svg';
import StarIcon from '../../../../assets/icons/favourite-star.svg';
import StarIconFilled from '../../../../assets/icons/favourite-star-filled.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export interface EmailProps {
  email?: string;
}

export const Unread: React.FC<EmailProps> = ({ email }) => {
  const boxesRadius = '10px';
  const [deleteIconHovered, setDeleteIconHovered] = useState(false);
  const [starIconHovered, setIconHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState<
    'unread' | 'home' | 'read' | 'favourite'
  >('home');

  return (
    <Box
      id="unread-emails"
      bgColor="#F0DFEF"
      height="fit-content"
      width="500px"
      borderColor="#3D3D44"
      border="1px solid"
      borderRadius="10px"
      pt={5}
      pl={3}
      pr={3}
      pb={5}
      fontSize={12}
      position="relative"
    >
      <Flex direction="column" gap="10px">
        <Flex id="breadcrumb-title" direction="row">
          <Text>
            Letters {'>'} unread {'(2/14)'}
          </Text>
        </Flex>
        <Flex
          id="email-content"
          direction="column"
          bgColor="white"
          borderRadius={boxesRadius}
        >
          <Box
            id="letter-header"
            height="fit-content"
            width="100%"
            borderRadius={boxesRadius}
          >
            <Flex
              direction="row"
              lineHeight="12px"
              width="100%"
              alignItems="center"
              gap="12px"
              marginRight={3}
            >
              <Box
                padding={2}
                border="solid 1px #ED1E81"
                bgColor="rositaBb"
                borderStartRadius={boxesRadius}
                borderBottomRadius="0px"
                borderStartEndRadius={boxesRadius}
                borderBottomEndRadius={boxesRadius}
              >
                <Text>Antonia Vaquita</Text>
              </Box>
              <Text marginRight={3}>12/12/24</Text>
              <Text marginRight={3}>12:23 PM</Text>

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
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              />
            </Flex>
          </Box>
          <Box className="lined-paper">
            <Text whiteSpace="pre-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
              arcu ac sem pulvinar laoreet. Sed mauris odio, ultrices ac lectus
              et, dictum tincidunt sapien. Praesent egestas suscipit auctor.
              Quisque at accumsan odio. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Proin varius lectus
              nec velit molestie, ac consequat lacus sollicitudin. Nunc tempor
              pharetra nibh, vel ullamcorper quam ullamcorper et.
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* Left Arrow */}
      <IconButton
        border="1px solid"
        fontSize="16px"
        icon={<ChevronLeftIcon />}
        aria-label="Previous"
        position="absolute"
        top="50%"
        left="-40px" /* Positioned outside the box */
        bgColor="#F0DFEF"
        padding="8px"
        borderRadius="full"
        boxShadow="lg"
        _hover={{ bgColor: 'gray' }}
      />

      {/* Right Arrow */}
      <IconButton
        border="1px solid"
        fontSize="16px"
        icon={<ChevronRightIcon />}
        aria-label="Next"
        position="absolute"
        top="50%"
        right="-40px" /* Positioned outside the box */
        bgColor="#F0DFEF"
        padding="8px"
        borderRadius="full"
        boxShadow="lg"
        _hover={{ bgColor: 'gray' }}
      />
    </Box>
  );
};

export default Unread;
