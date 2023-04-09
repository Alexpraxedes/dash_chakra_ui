import { Button, Flex, Stack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/Form/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as y from 'yup';

const signInFormSchema = y.object().shape({
  email: y.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: y.string().required('Senha obrigatória')
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn : SubmitHandler<FieldValues> = async ( values, event  ) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" 
        onSubmit={handleSubmit(handleSignIn)}
        w="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        flexDir="column"
      >
        <Stack spacing="4">
          <Input 
            type="email"
            label="E-mail"
            {...register( "email" )}
            error={formState.errors.email}
          />
          <Input 
            type="password"
            label="Senha" 
            {...register( "password" )}
            error={formState.errors.password}
          />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
        > 
          Entrar 
        </Button>
      </Flex>
    </Flex>
  )
}
