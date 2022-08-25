import type { NextPage } from 'next';
import { Flex } from 'components/layout/flex';
import React from 'react';
import { Button } from 'components/interaction/button';
import { Stack } from 'components/layout/stack';

const Home: NextPage = () => {
    return (
        <Flex
            flexDirection={'column'}
            itemSize={'fullViewport'}
            placeItems={'center'}
            gap={'lg'}
        >
            <Flex
                placeItems={'center'}
                border={'1px solid blue'}
                borderRadius={'md'}
                padding={'2xl'}
                gap={'lg'}
            >
                <Button variant={{ style: 'primary' }}>Primary</Button>
                <Button variant={{ style: 'secondary' }}>Secondary</Button>
                <Button variant={{ style: 'ternary' }}>Ternary</Button>
            </Flex>
            <Stack gap={'lg'}>
                <Button variant={{ style: 'primary' }}>Primary</Button>
                <Button variant={{ style: 'secondary' }}>Secondary</Button>
                <Button variant={{ style: 'ternary' }}>Ternary</Button>
            </Stack>
        </Flex>
    );
};

export default Home;
