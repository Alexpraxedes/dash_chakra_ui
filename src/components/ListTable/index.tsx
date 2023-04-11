import { Avatar, Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Link } from "@chakra-ui/react";
import { queryClient } from "@/services/queryClient";
import { RiPencilLine } from "react-icons/ri";
import { api } from "@/services/api";

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    avatar?: string;
}

interface ListTableProps{
    users: User[];
}

export function ListTable({ users }: ListTableProps) {    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`);

            return response.data;
        }, {
            staleTime: 1000 * 60 * 10, // 10 minutes
        })
    }

    return (
        <Table colorScheme="whiteAlpha">
            <Thead>
                <Tr>
                    { isWideVersion && (
                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                            <Checkbox colorScheme="pink" />
                        </Th>
                    ) }
                    <Th width="4" px="4" pr="0"></Th>
                    <Th>Lista de usuários</Th>
                    { isWideVersion && (
                        <Th>Data de cadastro</Th>
                    ) }
                    <Th width={["4", "8"]}></Th>
                </Tr>
            </Thead>
            <Tbody>
                { users.map(user => (
                    <Tr key={user.id}>
                        { isWideVersion && (
                            <Td px={["4", "4", "6"]}>
                                <Checkbox colorScheme="pink" />
                            </Td>
                        ) }
                        <Td width="4" px="4" pr="0">
                            <Box>
                                <Avatar size="sm" name={user.name} src={user.avatar ?? user.avatar}/>
                            </Box>
                        </Td>
                        <Td>
                            <Box>
                                <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                    <Text fontWeight="bold">{user.name}</Text>
                                </Link>
                                <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                        </Td>
                            { isWideVersion && (
                                <Td color="gray.300">{user.createdAt}</Td>
                            ) }
                        <Td width={["4", "8"]}>
                            { isWideVersion ? (
                                <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                    Editar
                                </Button>
                            ) : (
                                <Button as="a" size="sm" fontSize="sm" colorScheme="purple" pr="1" leftIcon={<Icon as={RiPencilLine} fontSize="16" />} />
                            )}
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}