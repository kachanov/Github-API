import styled from 'styled-components';

const List = styled.ul`
  overflow: auto;
  height: 300px;
  margin-top: 50px;
  padding-inline-start: 0px;
  background-color: #daf3a9;
  box-shadow: 10px 10px 25px -8px rgba(0, 0, 0, 0.5);
`;

const ListItem = styled.li`
  height: 30px;
  padding: 20px 0 0 20px;
  font-family: 'Menlo';
  list-style-type: none;

  &:hover {
    background-color: #c3f382;
  }
`;

export { List, ListItem }