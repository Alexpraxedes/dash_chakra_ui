import { ElementType } from 'react'
import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps, Flex, Button, Icon, Spinner } from '@chakra-ui/react'

interface HeadingProps extends ChakraHeadingProps {
    title: string,
    btnIcon?: ElementType,
    btnText?: string,
    btnHref? : string,

    isLoading?: boolean,
    isFetching?: boolean,
}

export function Heading({ title, btnIcon, btnText, btnHref, isFetching, isLoading, ...rest }: HeadingProps) {
    return (
        <Flex mb="8" justify="space-between" align="center">
            <ChakraHeading size="lg" fontWeight="normal" {...rest} >
                {title}
                { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </ChakraHeading>
            { btnIcon && btnText &&
                <Button as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="pink" 
                    leftIcon={<Icon as={btnIcon} fontSize="20" />}
                    href={btnHref}
                >
                    {btnText}
                </Button> 
            }
        </Flex>
    )
}