import type { NextPage } from 'next';
import { Button, buttonStyle } from 'components/interaction';
import { Center, Grid, HStack, VStack } from 'components/layout';

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
                <Center flexDirection={'column'}>
                    <p>Button with style extension</p>
                    <Button
                        className={buttonStyle}
                        variant={{ style: 'primary' }}
                    >
                        Primary
                    </Button>
                </Center>
                <Center flexDirection={'column'}>
                    <p>Button with style extension</p>
                    <Button
                        className={buttonStyle}
                        variant={{ style: 'secondary' }}
                    >
                        Secondary
                    </Button>
                </Center>
                <Center flexDirection={'column'}>
                    <p>Button with style extension</p>
                    <Button
                        className={buttonStyle}
                        variant={{ style: 'ternary' }}
                    >
                        Ternary
                    </Button>
                </Center>
            </Grid>
        </Grid>
    </VStack>
);

export default Home;
