
import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react";

const About = () => (
    <Box p={4} maxW="1200px" mx="auto" mt={12}>
        <VStack spacing={6} align="strech">
            <Heading as="h1" size="2x1">About</Heading>
        </VStack>
        <Divider />
        <Text fontSize="lg" className="content">Add something relevant here.</Text>
    </Box>
)


export default About;