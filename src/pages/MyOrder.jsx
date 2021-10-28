import * as React from 'react';
import { useParams } from 'react-router';
import { getFireStore } from '../firebase';


function MyOrder() {
    const [producto, setProducto] = React.useState([]);
    const {id} = useParams();

    React.useEffect(() => {
        const database = getFireStore();
        const ordCol = database.collection("orders");
        const myOrders = ordCol.doc(id)
        myOrders
            .get()
            .then((doc) => {
                setProducto({ id: doc.id, ...doc.data() })
            })
            .catch(() => { })
    }, [id])

    return (<div>
        <h4>{producto?.id}</h4>
    </div>
    )
}

export default MyOrder