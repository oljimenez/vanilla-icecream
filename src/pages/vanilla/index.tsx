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
            itemSize={'fullViewport'}
            placeItems={'center'}
            gap={'lg'}
        >
            <Flex placeItems={'center'} gap={'lg'}>
                <Button variant={{ style: 'primary' }}>Primary</Button>
                <Button variant={{ style: 'secondary' }}>Secondary</Button>
                <Button variant={{ style: 'ternary' }}>Ternary</Button>
            </Flex>
            <Grid gridTemplateColumns={'1fr 1fr 1fr;'} gap={'lg'}>
                <Button variant={{ style: 'primary' }}>Primary</Button>
                <Button variant={{ style: 'secondary' }}>Secondary</Button>
                <Button variant={{ style: 'ternary' }}>Ternary</Button>
            </Grid>
        </Flex>
    );
};

export default Home;
