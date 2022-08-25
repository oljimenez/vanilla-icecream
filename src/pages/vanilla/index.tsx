import type { NextPage } from 'next';
import { Flex } from 'components/flex';
import React from 'react';
import { Button } from 'components/button';

const Home: NextPage = () => {
    return (
        <Flex itemSize={'fullViewport'} placeItems={'center'} gap={'lg'}>
            <Button variant={{ style: 'primary' }}>Primary</Button>
            <Button variant={{ style: 'secondary' }}>Secondary</Button>
            <Button variant={{ style: 'ternary' }}>Ternary</Button>
        </Flex>
    );
};

export default Home;
