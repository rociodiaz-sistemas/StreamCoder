import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Flex } from '@chakra-ui/react';
import fq from '../assets/moons/firstquarter.svg';
import full from '../assets/moons/fullmoon.svg';
import lastq from '../assets/moons/lastquarter.svg';
import newmoon from '../assets/moons/newmoon.svg';
import waningcrescent from '../assets/moons/waningcrescent.svg';
import waxingcrescent from '../assets/moons/waxingcrescent.svg';
import waxinggibbous from '../assets/moons/waxinggibbous.svg';
import waninggibbous from '../assets/moons/waninggibbous.svg';
import moon from '../assets/moons/moon.svg';


// Meta information for the story
const meta: Meta = {
  title: 'Assets/Moons',
  argTypes: {
  },
};

export default meta;

// Story definition
export const Moons = () => {


  return (
    <Flex display='flex' bgColor='black'>
      <div>
        <p>First quarter moon</p>
        <img src={fq} alt='First Quarter Moon' />
      </div>
      <div>
        <p>Full moon</p>
        <img src={full} alt='Full Moon' />
      </div>
      <div>
        <p>Last quarter moon</p>
        <img src={lastq} alt='Last Quarter Moon' />
      </div>
      <div>
        <p>New moon</p>
        <img src={newmoon} alt='New Moon' />
      </div>
      <div>
        <p>Waning crescent moon</p>
        <img src={waningcrescent} alt='Waning Crescent Moon' />
      </div>
      <div>
        <p>Waxing crescent moon</p>
        <img src={waxingcrescent} alt='Waxing Crescent Moon' />
      </div>
      <div>
        <p>Waxing gibbous moon</p>
        <img src={waxinggibbous} alt='Waxing Gibbous Moon' />
      </div>
      <div>
        <p>Waning gibbous moon</p>
        <img src={waninggibbous} alt='Waning Gibbous Moon' />
      </div>
      <div>
        <p>Moon</p>
        <img src={moon} alt='Moon' />
      </div>
    </Flex>
  );
};
