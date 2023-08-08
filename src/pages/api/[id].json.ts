const listProduct = [
    {
        id: 1,
        name: 'Product 1',
    },
    {
        id: 2,
        name: 'Product 2',
    },
    {
        id: 3,
        name: 'Product 3',
    },
];

const getProduct = (id) => {
    return listProduct.find(pro => pro.id == id)
}

export async function get({ params }) {
    const id = params.id;
    const product = getProduct(id);

    if (!product) {
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }

    return new Response(JSON.stringify({ test: 'test', product }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}