import type { NextPage } from 'next';
import { Flex } from 'components/layout/flex';
import React from 'react';
import { Button } from 'components/interaction/button';

const Home: NextPage = () => {
    return (
        <Flex
            flexDirection={'column'}
            itemSize={'fullViewport'}
            placeItems={'center'}
            gap={'lg'}
        >
            <Flex
                flexDirection={'column'}
                borderWidth={'1px'}
                borderStyle={'solid'}
                borderColor={'red'}
                borderRadius={'md'}
                padding={'2xl'}
                placeItems={'center'}
                gap={'lg'}
            >
                <Flex padding={'2xl'} placeItems={'center'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </Flex>

                <Flex padding={'2xl'} placeItems={'center'} gap={'lg'}></Flex>
            </Flex>
        </Flex>
    );
};

export default Home;
