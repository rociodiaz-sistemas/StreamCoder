import { Box, Text } from '@chakra-ui/react';

const NotebookText = () => {
  return (
    <Box
      position="relative"
      w="100%"
      p={4}
      bg="white"
      border="1px solid #ddd"
      overflow="hidden"
      _before={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(to bottom, #ddd 1px, transparent 1px),
          linear-gradient(to bottom, transparent 20px, #ddd 20px)
        `,
        backgroundSize: '100% 20px',
        zIndex: 1,
      }}
    >
      <Text position="relative" zIndex={2}>
        {/* Add your text here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
        libero non arcu suscipit cursus a id risus. Suspendisse potenti. Sed
        consectetur, nulla a scelerisque tempor, lorem risus ultricies justo, eu
        scelerisque libero eros ac magna. Curabitur suscipit libero et tortor
        tincidunt, nec volutpat justo eleifend. Integer vestibulum mauris sit
        amet elit gravida, vitae sagittis dolor sollicitudin. Phasellus a urna
        ipsum. Etiam vehicula eros ut est efficitur, eget laoreet ligula
        posuere.
      </Text>
    </Box>
  );
};

export default NotebookText;
