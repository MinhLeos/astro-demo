/// <reference types="astro/client" />
declare namespace App {
    interface Locals {
        title: string,
        description: string,
        name: string,
        welcomeTitle: () => string,
        orders: object[],
        customer: {
            id: string,
        },
    }
}
