import { Avatar, Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    avatar?: string;
}

interface ListTableProps{
    users: User[];
    fields: string[];
}

export function ListTable({ users, fields }: ListTableProps) {
    return (
        <Table colorScheme="whiteAlpha">
            <Thead>
                <Tr>
                    <Th px="6" color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                    </Th>
                    <Th width="4" px="4" pr="0"></Th>
                    {fields.map(field => (
                        <Th key={field}>{field}</Th>
                    ))}
                    <Th width="8"></Th>
                </Tr>
            </Thead>
            <Tbody>
                { users.map(user => (
                    <Tr key={user.id}>
                        <Td px="6">
                            <Checkbox colorScheme="pink" />
                        </Td>
                        <Td width="4" px="4" pr="0">
                            <Box>
                                <Avatar size="sm" name={user.name} src={user.avatar ?? user.avatar}/>
                            </Box>
                        </Td>
                        <Td>
                            <Box>
                                <Text fontWeight="bold">{user.name}</Text>
                                <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                        </Td>
                        <Td color="gray.300">{user.createdAt}</Td>
                        <Td>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                Editar
                            </Button>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}