import { Button, Flex, HStack, ButtonProps, } from "@chakra-ui/react";

interface ActionsButtonsProps extends ButtonProps {
    btnCancelText: string,
    btnCancelHref: string,
    btnCancelColorScheme?: string,

    btnSaveText: string,
    btnSaveHref: string,
    btnSaveColorScheme?: string,
}

export function ActionsButtons({ 
    btnCancelText, 
    btnCancelHref, 
    btnCancelColorScheme,
    btnSaveText,
    btnSaveHref,
    btnSaveColorScheme
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
                <Button as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme={ btnSaveColorScheme || "pink" }
                    href={btnSaveHref}
                >
                    {btnSaveText}
                </Button>
            </HStack>
        </Flex>
    )
}