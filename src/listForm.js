import {Button, FormControl, InputGroup} from "react-bootstrap";
import { add } from './redux.js';
import { useDispatch }  from 'react-redux';

import styles from './listForm.module.scss'
import {useState} from "react";

const ListForm = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  return (
    <div className={styles.listForm}>
      <InputGroup>
        <span className={styles.listForm__text}>Добавить фрукт в список: </span>
        <FormControl
          placeholder="Напишите название фрукта"
          onInput={(e) => setInput(e.target.value)} />
        <Button onClick={() => dispatch(add(input))}>Добавить</Button>
      </InputGroup>
    </div>
  );
};

export default ListForm;