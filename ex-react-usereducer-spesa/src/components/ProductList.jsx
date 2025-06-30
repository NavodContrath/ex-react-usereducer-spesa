import products from '../assets/data'

export default function ProductList({ dispatch }) {
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
                                            <h6 className="card-subtitle mb-2 text-muted ">Price: {product.price}&euro;</h6>
                                            <button onClick={() => { dispatch({ type: 'ADD_ITEM', item: product }) }}>Add To Cart</button>
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