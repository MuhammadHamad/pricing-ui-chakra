import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import Icon1 from './icons/Icon1'
import Icon2 from './icons/Icon2'
import Icon3 from './icons/Icon3'

function Features() {
    return (
        <Box maxW={"906px"} mx="auto" mt={"25px"} px="50px">
            <Flex direction={{base: "column", lg: "row"}}>
                <HStack mr={"20px"} mb={"20px"}>
                    <Icon as={Icon1} />
                    <Text pl={"10px"}>30 days money back Guarantee</Text>
                </HStack>
                <HStack mr={"20px"} mb={"20px"}>
                    <Icon as={Icon2} />
                    <Text pl={"10px"}>No setup fees 100% hassle-free</Text>
                </HStack>
                <HStack mb={"20px"}>
                    <Icon as={Icon3} />
                    <Text pl={"10px"}>No monthly subscription Pay once and for all</Text>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Features