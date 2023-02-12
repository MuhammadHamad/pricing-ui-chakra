import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import checkMarkIcon from './icons/checkMarkIcon';

function Pricing() {
    return (
        // box container starts
        <Box 
        maxW={"950px"}
        mx={{base: "20px", lg: "auto"}} 
        mt={"-150px"} 
        borderRadius={"10px"} 
        overflow="hidden"
        boxShadow={"0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)"}>
            <Flex direction={{base: "column", lg: "row"}}>
                {/* left box */}
                <Box bg={"red.200"} py={"50px"} px={"40px"} textAlign="center">
                    <Text fontSize={"24px"} fontWeight={"bold"}>Premium PRO</Text>
                    <Heading fontSize={"60px"}>$329</Heading>
                    <Text>Billed just once</Text>
                    <Button bg={"#ea4c57"} color={"white"} w={"282px"} mt={"20px"}>Get Started</Button>
                </Box>

                {/* right box */}
                <Box pt={"50px"} px={"40px"} bg="white">
                    <Text mb={"25px"}>Access these features when you get this pricing package for your business.</Text>
                    <HStack mb={"10px"}>
                        <Icon as={checkMarkIcon} />
                        <Text pl={"10px"}>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb={"10px"}>
                        <Icon as={checkMarkIcon} />
                        <Text pl={"10px"}>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb={"10px"}>
                        <Icon as={checkMarkIcon} />
                        <Text pl={"10px"}>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack mb={"10px"}>
                        <Icon as={checkMarkIcon} />
                        <Text pl={"10px"}>International calling and messaging API</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Pricing;