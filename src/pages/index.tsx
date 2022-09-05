import type { NextPage } from 'next';
import { Button } from 'components/interaction';
import { Flex, VStack } from 'components/layout';
import { Text } from 'components/text/Text';
import { Heading } from 'components/text';
import { Box } from 'components/layout/box';

const Home: NextPage = () => {
    return (
        <VStack flexPlaceItems={'center'} itemSize={'fullViewport'} gap={'md'}>
            <Heading as={'h1'}>Build with Vanilla Kit</Heading>
            <VStack flexPlaceItems={'center'}>
                <Text color={'black'}>Flexbox</Text>
                <Flex
                    background={'neutral.900'}
                    display={'grid'}
                    flexDirection={{ mobile: 'column', desktop: 'row' }}
                    flexPlaceItems={'center'}
                    gap={'md'}
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
