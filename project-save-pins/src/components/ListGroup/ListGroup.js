import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const CustomListGroup = ({ items = [] }) => {
  return (
    <ListGroup as="ul">
      {items.map((item, index) => {
        return (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.title}</div>
            </div>
            {item.count ? (
                <Badge bg="primary" pill>
              {item.count}
                </Badge> 
            ) : null }
            
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CustomListGroup;
