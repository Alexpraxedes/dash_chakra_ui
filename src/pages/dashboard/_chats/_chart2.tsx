import { theme } from "@chakra-ui/react";

export const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2023-03-1T00:00:00.000Z',
            '2023-03-2T00:00:00.000Z',
            '2023-03-3T00:00:00.000Z',
            '2023-03-4T00:00:00.000Z',
            '2023-03-5T00:00:00.000Z',
            '2023-03-6T00:00:00.000Z',
            '2023-03-7T00:00:00.000Z'
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

export const series = [{ name: 'series1', data: [31, 120, 17, 28, 61, 23, 109] }];