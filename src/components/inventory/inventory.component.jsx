import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem, deleteItem } from '../../redux/item/item.action';

const Inventory = props => {
    const [form, setForm] = useState({
        id: props.sequenceId,
        categoryId: 1,
        name: "",
        price: "",
        owner: props.currentUser
    });

    const addItem = () => {
        props.addItem(form);
        setForm({
            id: props.sequenceId,
            categoryId: 1,
            name: "",
            price: "",
            owner: props.currentUser
        });
        console.log(props.items);
    }

    return (
        <React.Fragment>
            <h3>Manage for {props.currentUser}</h3>
            <table width="100%" border="1px">
                <thead>
                    <tr>
                        <td align="center" width="25%"><strong>Category</strong></td>
                        <td align="center" width="25%"><strong>Name</strong></td>
                        <td align="center" width="25%"><strong>Price</strong></td>
                        <td align="center" width="25%"><strong>Delete</strong></td>
                    </tr>
                </thead>
                <tbody>
                {
                    props.items.map( item => ( item.owner === props.currentUser ) ? 
                        <tr key={item.id}>
                            <td>{props.categories.find( cate => cate.id === item.categoryId ).name}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td><input type="button" value="Delete" onClick={() => props.deleteItem(item)} /></td>
                        </tr>
                        : ""
                    )
                }
                </tbody>
            </table>
            <h3>Add Item</h3>
            Category: 
            <select value={form.categoryId} onChange={e => setForm({...form, categoryId: parseInt(e.target.value)})}>
            {
                props.categories.map( cate => <option key={cate.id} value={cate.id}>{cate.name}</option>)
            }
            </select><br/>
            Name: <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /> <br/>
            Price: <input type="text" value={form.price} onChange={e => setForm({...form, price: e.target.value})} /> <br/>
            <input type="button" value="Save" onClick={() => addItem(form)} />
        </React.Fragment>
    )
}

const mapStateToProps = store => ({
    categories: store.categoryStore.categories,
    items: store.itemStore.items,
    sequenceId: store.itemStore.sequenceId,
    currentUser: store.userStore.auth.currentLoggedInUser
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);