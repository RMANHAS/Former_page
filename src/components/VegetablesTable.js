import React from 'react'

const VegetablesTable = () => {
    return (<div className='details'>
        <div> <table className='content-table' >

            <h2>Vegetables</h2>

            <tr align='center'>
                <th>Product</th>
                <th> Price</th>
                <th> Qty</th>
                <th> Units</th>
                <th> Notes</th>
                <th>     </th>
            </tr>

            <tr align='center'>
                <td>Button Mashrom</td>
                <td>₹30</td>
                <td> 1</td>
                <td> Pc</td>
                <td>200gm</td>
                <td><button className='button-color'>Add to List</button></td>
            </tr>
            <tr align='center'>
                <td>Oyster Mushroom</td>
                <td>₹20</td>
                <td> 1</td>
                <td> Pc</td>
                <td>100gm</td>
                <td><button className='button-color'>Add to List</button></td>
            </tr>
            <tr align='center'>
                <td>Red Yellow Capsicum</td>
                <td>₹180</td>
                <td> 1</td>
                <td> kg</td>
                <td>   </td>
                <td><button className='button-color'>Add to List</button></td>
            </tr>
            <tr align='center'>
                <td>Green Capsicum</td>
                <td>₹50</td>
                <td> 1</td>
                <td> kg</td>
                <td>  </td>
                <td><button className='button-color'>Add to List</button></td>
            </tr>
            <tr align='center'>
                <td>Cow Milk</td>
                <td>₹50</td>
                <td> 1</td>
                <td> kg</td>
                <td>  </td>
                <td ><button className='button-color'>Add to List</button></td>
            </tr>
        </table></div>
        <div className='list  '>
            <div>
                <p> <strong>Your List</strong>(Min. Order Value - 300)</p>
                <p>Total price:0</p>
                <div><button className='buttons'>clear cart</button></div>
                <p>Please login or register yourself first to place order </p></div>

        </div>
    </div>

    )
}
export default VegetablesTable;