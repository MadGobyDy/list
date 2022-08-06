import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup,Spinner } from 'react-bootstrap';
import styles from './List.module.scss';
import { remove } from '../../store/listSlice';
import { ListItem } from './ListItem/ListItem';

function List() {
    const count = useSelector((state) => state.list.items);
    const dispatch = useDispatch();

    const removeListItem = useCallback((item) => dispatch(remove(item)), [dispatch]);

    return (
        <ListGroup className={styles.list} data-testid="list">
            {count === null && (
                <Spinner animation="border" className={styles.list__spinner} />
            )}
            {count !== null && count.length === 0 && (
                <span className={styles.list__empty} data-testid="emptyList">Список фруктов пуст</span>
            )}
            {count !== null
                && count.length > 0
                && count.map((item, id) => (<ListItem key={`${id}-${item}`} item={item} onClick={removeListItem}/>))
            }
      </ListGroup>
    );
}

export { List };
