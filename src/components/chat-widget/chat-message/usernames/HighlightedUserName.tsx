import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@chakra-ui/react';

const HighlightedUsername = ({
  displayName,
  color,
}: {
  displayName: string;
  color: string;
}) => {
  const theme = useTheme();
  const [fadeOut, setFadeOut] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setFadeOut(true);
    }, 500);
  };

  const highlightedColor = theme.messageStyles.highlighted.highlightedColor;
  const fontColor = theme.messageStyles.highlighted.fontColor;

  // SVG content and styles
  const svgContent = `
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 512 512" xml:space="preserve">
<polygon id='part1' style="fill: ${highlightedColor};" points="113.466,244.023 276.228,406.785 501.801,136.426 383.826,18.451 "/>
<polygon style="fill: ${highlightedColor};" points="132.056,262.612 257.678,388.234 219.576,425.808 94.181,300.412 "/>
<path style="fill:#E6E6E6;" d="M45.35,415.831l59.072,59.072l0.079,0.079c31.968-22.906,68.91-39.471,107.397-47.56l7.679-1.614
	L94.181,300.412l-1.482,7.217C84.698,346.585,68.512,383.504,45.35,415.831L45.35,415.831z"/>
<polygon id='part2' style="fill: ${highlightedColor};" points="68.403,493.547 10.199,468.355 54.036,424.518 95.734,466.216 "/>
<g>
	<path style="fill:#603813;" d="M509.014,129.214L391.039,11.239c-3.733-3.731-9.693-4-13.746-0.619L106.933,236.192
		c-2.199,1.835-3.526,4.51-3.655,7.372c-0.129,2.862,0.953,5.645,2.977,7.671l11.37,11.37l-30.648,30.587
		c-1.426,1.423-2.386,3.224-2.784,5.168l-0.002-0.001l-1.482,7.217c-7.646,37.235-23.432,73.307-45.65,104.314
		c-2.908,4.057-2.45,9.623,1.079,13.153l1.475,1.475L2.987,461.143c-2.389,2.389-3.439,5.804-2.807,9.123
		c0.633,3.318,2.868,6.107,5.968,7.449l58.203,25.193c1.305,0.565,2.683,0.839,4.05,0.839c2.653,0,5.261-1.035,7.214-2.987
		l20.12-20.12l1.52,1.52l0.08,0.079c1.97,1.946,4.562,2.943,7.169,2.943c2.07,0,4.15-0.628,5.937-1.908
		c31.144-22.315,66.953-38.177,103.554-45.87l7.679-1.615l-0.002-0.005c1.852-0.388,3.62-1.287,5.066-2.714l30.889-30.461
		l11.389,11.389c1.917,1.916,4.513,2.987,7.211,2.987c0.153,0,0.307-0.003,0.46-0.01c2.862-0.129,5.537-1.455,7.373-3.654
		l225.573-270.359C513.013,138.908,512.745,132.946,509.014,129.214z M66.093,481.434l-38.071-16.478l26.013-26.014l27.274,27.274
		L66.093,481.434z M58.586,414.644c19.143-28.487,33.36-60.579,41.581-93.82l99.056,99.056
		c-32.887,8.255-64.887,22.573-93.54,41.864L58.586,414.644z M219.627,411.433L108.612,300.419l23.437-23.389l111.154,111.154
		L219.627,411.433z M128.571,244.705L383.204,32.252l104.795,104.796L275.548,391.681L128.571,244.705z"/>
	<path style="fill:#603813;" d="M286.184,134.973l-124.43,103.819c-4.325,3.608-4.907,10.04-1.297,14.365
		c2.018,2.418,4.916,3.666,7.837,3.666c2.305,0,4.621-0.777,6.529-2.368l124.43-103.819c4.325-3.608,4.907-10.04,1.297-14.365
		C296.94,131.943,290.508,131.364,286.184,134.973z"/>
	<path style="fill:#603813;" d="M328,100.083l-13.682,11.416c-4.325,3.608-4.907,10.04-1.297,14.365
		c2.018,2.418,4.916,3.666,7.837,3.666c2.305,0,4.621-0.777,6.529-2.368l13.682-11.416c4.326-3.608,4.907-10.04,1.297-14.365
		C338.755,97.054,332.325,96.475,328,100.083z"/>
</g>
</svg>
  `;

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'visible',
      }}
    >
      <motion.span
        style={{
          fontWeight: 'bold',
          color: fontColor,
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: `linear-gradient(to right, transparent 50%, ${highlightedColor} 50%)`,
          backgroundSize: '200% 100%',
          backgroundPosition: '0% 0%',
          paddingInline: '2px',
        }}
        animate={{ backgroundPosition: '-100% 0' }}
        transition={{ duration: 0.75, delay: 0.6, type: 'tween' }}
      >
        {displayName}
      </motion.span>
      <AnimatePresence>
        {!fadeOut && (
          <motion.img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}
            alt="Highlighter"
            style={{
              height: '2.1em',
              width: 'auto',
              position: 'absolute',
              left: -10,
              top: -10,
              zIndex: 1,
              color: 'red', // Set the color dynamically
            }}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: '400%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, delay: 0.6, type: 'tween' }}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HighlightedUsername;
