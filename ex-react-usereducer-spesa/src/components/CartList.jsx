export default function CartList({ addedProducts, dispatch }) {
    const totalQuantity = addedProducts.reduce((acc, curr) => acc + curr.quantity, 0)
    const totalPrice = addedProducts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    return (
        <div className="container">
            {addedProducts.length > 0 ? <h1>Cart List</h1> : <></>}
            {
                addedProducts.map((p, i) => {
                    return (
                        <div className='col-4' key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">Price: {p.price}&euro;</h6>
                                    <input type="number"
                                        className="card-subtitle mb-2 text-muted"
                                        min={1}
                                        value={p.quantity}
                                        onChange={(e) => { dispatch({ type: 'UPDATE_QUANTITY', name: p.name, value: e.target.value }) }}></input>
                                    <button onClick={() => { dispatch({ type: 'REMOVE_ITEM', item: p }) }}>Remove from cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="card col-4 mt-3">
                <div className="card-body">
                    <h4 className="card-title">TOTALS</h4>
                    <h6 className="card-subtitle text-muted mb-2">Quantity: {totalQuantity}</h6>
                    <h6 className="card-subtitle text-muted">Price: {totalPrice}&euro;</h6>
                </div>
            </div>

        </div>
    )
}