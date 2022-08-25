import type { NextPage } from 'next';
import { Button, buttonStyle } from 'components/interaction';
import { Center, Grid, HStack, VStack } from 'components/layout';
import { Text } from 'components/text';

const Home: NextPage = () => {
    //here your typescript

    return (
        <VStack flexPlaceItems={'center'} itemSize={'fullViewport'} gap={'lg'}>
            <h1>Build with Vanilla Kit</h1>
            <VStack flexPlaceItems={'center'}>
                <Text>Flexbox</Text>
                <HStack flexPlaceItems={'center'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Home;
