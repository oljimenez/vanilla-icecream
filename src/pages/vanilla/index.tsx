import type { NextPage } from 'next';
import React from 'react';
import { Button } from 'components/interaction/button';
import { Grid } from 'components/layout/grid';
import { HStack, VStack } from 'components/layout/stack';

const Home: NextPage = () => {
    return (
        <VStack flexPlaceItems={'center'} itemSize={'fullViewport'} gap={'lg'}>
            <VStack flexPlaceItems={'center'}>
                <p>Flexbox</p>
                <HStack flexPlaceItems={'center'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </HStack>
            </VStack>
            <Grid placeItems={'center'}>
                <p>Grid</p>
                <Grid gridTemplateColumns={'1fr 1fr 1fr;'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </Grid>
            </Grid>
        </VStack>
    );
};

export default Home;
