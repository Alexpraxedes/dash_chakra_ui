import { Sidebar } from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { options as options1, series as series1 } from "./_chats/_chart1";
import { options as options2, series as series2 } from "./_chats/_chart2";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                <Box bg="gray.800" p="8" borderRadius={8}>
                    <Text fontSize="lg" mb="4">
                        Inscritos da semana
                    </Text>
                    <Chart type="area" height={160} options={options1} series={series1} />

                </Box>
                <Box bg="gray.800" p="8" borderRadius={8}>
                    <Text fontSize="lg" mb="4">
                        Taxa de abertura
                    </Text>
                    <Chart type="area" height={160} options={options2} series={series2} />
                </Box>
            </SimpleGrid>
                    
        </Flex>
    </Flex>
  )
}
