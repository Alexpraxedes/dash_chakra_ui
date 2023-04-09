import { Button, Flex, HStack, ButtonProps, } from "@chakra-ui/react";

interface ActionsButtonsProps extends ButtonProps {
    btnCancelText: string,
    btnCancelHref: string,
    btnCancelColorScheme?: string,

    btnSaveText: string,
    btnSaveHref: string,
    btnSaveColorScheme?: string,
    btnSaveIsLoading?: boolean,
}

export function ActionsButtons({ 
    btnCancelText, 
    btnCancelHref, 
    btnCancelColorScheme,
    btnSaveText,
    btnSaveHref,
    btnSaveColorScheme,
    btnSaveIsLoading = false,
}: ActionsButtonsProps ) {
    return (
        <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
                <Button as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme={ btnCancelColorScheme || "whiteAlpha" }
                    href={btnCancelHref}
                >
                    {btnCancelText}
                </Button>
                <Button
                    type="submit"
                    size="sm" 
                    fontSize="sm" 
                    colorScheme={ btnSaveColorScheme || "pink" }
                    href={btnSaveHref}
                    isLoading={btnSaveIsLoading}
                >
                    {btnSaveText}
                </Button>
            </HStack>
        </Flex>
    )
}