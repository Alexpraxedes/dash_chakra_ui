import { useState } from "react";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { ListTable } from "@/components/ListTable";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { useUsers } from "@/services/hooks/users/useUsers";

export default function UserList() {   
    const [ page, setPage ] = useState(1);
    const { data, isLoading, isFetching, error } = useUsers(page);

    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "6"]}>
                <Sidebar />
    
                <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "8"]}>
                    <Heading 
                        title="Usuários"
                        btnIcon={RiAddLine}
                        btnText="Criar novo"
                        btnHref="/users/create"
                        isLoading={isLoading}
                        isFetching={isFetching}
                    />

                    { isLoading ? (
                        <Flex justify="center" mt="8">
                            <Spinner />
                        </Flex>
                        ) : error ? (
                            <Flex justify="center" mt="8">
                                <Text>Falha ao obter dados dos usuários!</Text> 
                            </Flex>
                        ) : (
                            <>
                                <ListTable users={ data.users } />
                                <Pagination
                                    totalCountOfRegisters={ data.totalCount }
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        )
                    }
                </Box>                    
            </Flex>
        </Flex>
    )
}