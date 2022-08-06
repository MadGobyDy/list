import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../../store/listSlice';

import styles from './ListForm.module.scss';

function ListForm() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    return (
        <div className={styles.listForm}>
            <InputGroup>
                <span className={styles.listForm__text}>Добавить фрукт в список: </span>
                <FormControl
                    placeholder="Напишите название фрукта"
                    onInput={(e) => setInput(e.target.value)}
                />
                <Button onClick={() => input && dispatch(add(input))} data-testid="inputButton">Добавить</Button>
          </InputGroup>
      </div>
    );
}

export default ListForm;
