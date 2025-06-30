import products from '../assets/data'

export default function ProductList({ setAddedProducts }) {

    function addToCart(item) {

        setAddedProducts(prev => {
            //guardo se item è già presente nell'array
            const foundItem = prev.find(p => p.name === item.name)
            if (foundItem) {
                return prev.map(p => p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p)
            } else {
                return [...prev, { ...item, quantity: 1 }]
            }
        })
    }
    return (
        <>
            <section className='product-list'>
                <div className="container">
                    <h1>Product List</h1>

                    {
                        products.map((product, i) => {
                            return (
                                <div className='col-4' key={i}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted ">{product.price}</h6>
                                            <button onClick={() => { addToCart(product) }}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}