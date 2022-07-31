import {useDispatch, useSelector} from "react-redux";
import {Button, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import styles from './list.module.scss';
import {remove} from './redux.js';

const List = () => {
  const count = useSelector((state) => state.list.items)
  const dispatch = useDispatch();
  return (
    <ListGroup className={styles.list}>
      {count === null && <Spinner animation="border" className={styles.list__spinner}/>}
      {count !== null && count.length === 0 && <span className={styles.list__empty}>Список фруктов пуст</span>}
      {count !== null && count.length > 0 &&
        count.map((item) => {
          return <ListGroupItem
            className={styles.list__item}
            key={item}>
            {item}
            <Button variant="outline-danger" onClick={() => dispatch(remove(item))}>Удалить</Button>
          </ListGroupItem>
        })
      }
    </ListGroup>
  );
};

export default List;