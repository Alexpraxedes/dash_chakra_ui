import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { ListTable } from "@/components/ListTable";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { users } from "../../../data/users";

export default function UserList() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
    
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading 
                        title="Usuários"
                        btnIcon={RiAddLine}
                        btnText="Criar novo"
                        btnHref="/users/create"
                    />

                    <ListTable 
                        fields={["Usuário", "Data de cadastro"]}
                        users={users}
                    />
                    <Pagination />
                </Box>                    
            </Flex>
        </Flex>
    )
}