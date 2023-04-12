import { Box, Flex, Divider, VStack, SimpleGrid } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import * as y from 'yup';

import { ActionsButtons } from "@/components/Form/ActionsButtons";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Form/Input";
import { api } from "@/services/api";
import { queryClient } from "@/services/queryClient";

const createUserFormSchema = y.object().shape({
    name: y.string().required('Nome obrigatório'),
    email: y.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: y.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: y.string().oneOf([
        y.ref('password')
    ], 'As senhas precisam ser iguais')
});

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(
        async (user: FieldValues) => {
            const response = await api.post('users', {
                user: {
                    ...user,
                    created_at: new Date(),
                }
            })
            return response.data.user;
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
            }
        }
    );
    
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver( createUserFormSchema )
    });

    const handleCreateUser : SubmitHandler<FieldValues> = async ( values, event  ) => {
        await createUser.mutateAsync(values);

        router.push('/users');
    }
    
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
    
                <Box as="form" 
                    onSubmit={handleSubmit(handleCreateUser)}
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6", "8"]}
                >
                    <Heading title="Criar usuário" />
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input 
                                label="Nome completo" 
                                {...register('name')}
                                error={formState.errors.name}
                            />
                            <Input 
                                type="email" 
                                label="E-mail" 
                                {...register('email')}
                                error={formState.errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input 
                                type="password" 
                                label="Senha" 
                                {...register('password')}
                                error={formState.errors.password}
                            />
                            <Input  
                                type="password" 
                                label="Confirmação da senha" 
                                {...register('password_confirmation')}
                                error={formState.errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <ActionsButtons
                        btnCancelText="Cancelar"
                        btnCancelHref="/users"
                        btnSaveText="Salvar"
                        btnSaveHref="/users"
                        btnSaveIsLoading={formState.isSubmitting}
                    />
                </Box>                    
            </Flex>
        </Flex>
    )
}