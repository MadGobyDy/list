import React from 'react';

import { Button, ListGroupItem } from 'react-bootstrap';
import styles from './ListItem.module.scss';

const ListItem = ({item, onClick}) => {
    const handleRemoveClick = () => {
        onClick(item)
    }

    return (
        <ListGroupItem className={styles.listItem}>
            {item}
            <Button
                data-testid="deleteButton"
                variant="outline-danger"
                onClick={handleRemoveClick}
            >
            Удалить
            </Button>
        </ListGroupItem>
    );
};

export {ListItem};