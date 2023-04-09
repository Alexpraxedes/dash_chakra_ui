import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Heading } from "@/components/Heading";
import { Box, Flex, Divider, VStack, SimpleGrid } from "@chakra-ui/react";
import { Input } from "@/components/Form/Input";
import { ActionsButtons } from "@/components/Form/ActionsButtons";

export default function CreateUser() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
    
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading title="Criar usuário" />

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" />
                        </SimpleGrid>
                    </VStack>

                    <ActionsButtons
                        btnCancelText="Cancelar"
                        btnCancelHref="/users"
                        btnSaveText="Salvar"
                        btnSaveHref="/users"
                    />
                </Box>                    
            </Flex>
        </Flex>
    )
}