import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Alex Praxedes</Text>
                <Text color="gray.300" fontSize="small">
                    id.praxedes@gmail.com
                </Text>
            </Box>
            <Box>
                <Avatar size="md" name="Alex Praxedes" src="">
                    <AvatarBadge bg='orange.400' boxSize='1em' />
                </Avatar>
            </Box>
        </Flex>
    )
}