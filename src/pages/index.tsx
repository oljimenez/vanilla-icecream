import type { NextPage } from 'next';
import { Button } from 'components/interaction';
import { HStack, VStack } from 'components/layout';
import { Text } from 'components/text';
import { Box } from 'components/layout/box';

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

            <Box
                display={'flex'}
                justifyContent={{
                    mobile: 'center',
                    desktop: 'space-between'
                }}
                alignItems={'center'}
                padding={'sm'}
                background={{
                    lightMode: 'error.200',
                    darkMode: 'error.100'
                }}
                color={{
                    lightMode: 'error.200',
                    darkMode: 'blue'
                }}
            >
                Example
            </Box>
        </VStack>
    );
};

export default Home;
