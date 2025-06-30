export default function CartList({ addedProducts }) {

    return (
        <div className="container">
            <h1>Cart List</h1>


            {
                addedProducts.map((p, i) => {
                    return (
                        <div className='col-4' key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">{p.price}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted ">{p.quantity}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}