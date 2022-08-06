import React, { useEffect } from 'react';
import './App.scss';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { List } from '../components/List/List';
import ListForm from '../components/ListForm/ListForm';
import { db } from '../firebase/firebase';
import { initial } from '../store/listSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        onSnapshot(doc(db, 'fruits', 'fruits'), (docInst) => {
            dispatch(initial(docInst.data().items));
        });
    }, [dispatch]);

    return (
        <div className="app" data-testid="app">
            <ListForm />
            <List />
        </div>
    );
}
export { App };
