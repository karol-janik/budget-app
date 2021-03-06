import { useState, Fragment } from 'react';

const Item = ({ item, onClickHandler, isActive }) => (
  <div>
    <item.Trigger onClick={onClickHandler} />
    {isActive && item.children}
  </div>
);

const ToggleableList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <Fragment>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onClickHandler={setSelectedItem}
          isActive={selectedItem === item.id}
        />
      ))}
    </Fragment>
  );
};

export default ToggleableList;
