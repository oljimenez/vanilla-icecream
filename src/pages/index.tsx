import type { NextPage } from 'next';
import { Button } from 'components/interaction';
import { Flex, VStack } from 'components/layout';
import { Text } from 'components/text/Text';
import { Heading } from 'components/text';

const Home: NextPage = () => {
    //here your typescript

    return (
        <VStack flexPlaceItems={'center'} itemSize={'fullViewport'} gap={'md'}>
            <Heading as={'h1'}>Build with Vanilla Kit</Heading>
            <VStack flexPlaceItems={'center'}>
                <Text color={'red'}>Flexbox</Text>
                <Flex
                    display={'grid'}
                    flexDirection={{ mobile: 'column', desktop: 'row' }}
                    flexPlaceItems={'center'}
                    gap={'lg'}
                >
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </Flex>
            </VStack>
        </VStack>
    );
};

export default Home;
