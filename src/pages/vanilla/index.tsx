import type { NextPage } from 'next';
import { Flex } from 'components/layout/flex';
import React from 'react';
import { Button } from 'components/interaction/button';
import { Stack } from 'components/layout/stack';
import { Grid } from 'components/layout/grid';

const Home: NextPage = () => {
    return (
        <Flex
            flexDirection={'column'}
            flexPlaceItems={'center'}
            itemSize={'fullViewport'}
            gap={'lg'}
        >
            <Flex flexPlaceItems={'center'} flexDirection={'column'}>
                <p>Flexbox</p>
                <Flex flexPlaceItems={'center'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </Flex>
            </Flex>
            <Grid placeItems={'center'}>
                <p>Grid</p>
                <Grid gridTemplateColumns={'1fr 1fr 1fr;'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </Grid>
            </Grid>
        </Flex>
    );
};

export default Home;
