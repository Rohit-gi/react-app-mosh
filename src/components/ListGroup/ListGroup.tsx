import { MouseEvent, useState } from "react";
import styles from './ListGroup.module.css'; 
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  padding: 5px 0;
`

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <ListItem
            
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
