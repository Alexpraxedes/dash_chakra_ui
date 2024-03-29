import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";
import { user } from "../../services/data/loggedInUser";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>{user.name}</Text>
                    <Text color="gray.300" fontSize="small">
                        {user.email}
                    </Text>
                </Box>
            )}
            <Box>
                <Avatar size="md" name={user.name} src="">
                    {user.notification && <AvatarBadge bg='green.500' boxSize='1em' />}
                </Avatar>
            </Box>
        </Flex>
    )
}