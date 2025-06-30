import products from '../assets/data'

export default function ProductList() {

    return (
        <>
            <section className='product-list'>
                <div className="container">
                    {
                        products.map((product, i) => {
                            return (
                                <div className="col-3" key={i}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted ">{product.price}</h6>
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