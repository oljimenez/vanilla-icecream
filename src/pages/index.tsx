import type { NextPage } from 'next';
import { HStack, VStack } from 'components/layout/stack';
import { Button } from 'components/interaction';
import { Grid } from 'components/layout/grid';

const Home: NextPage = () => (
    <VStack flexPlaceItems={'center'} itemSize={'fullViewport'} gap={'lg'}>
        <h1>Build with Vanilla Extract Kit</h1>
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

export default Home;
