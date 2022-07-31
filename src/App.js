import './App.scss';
import List from "./list";
import ListForm from "./listForm"
import { db } from "./firebase";
import {useEffect} from "react";
import {doc, onSnapshot} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {initial} from './redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(doc(db, "fruits", "fruits"), (doc) => {
      dispatch(initial(doc.data().items));
    });
  }, [dispatch])

  return (
    <div className="app">
      <ListForm />
      <List />
    </div>
  );
}

export default App;
