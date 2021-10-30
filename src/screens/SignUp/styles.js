import styled from 'styled-components/native';
import {primary, white, gray} from '../../assets/colors';

export const Body = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px 0px;
`;

export const TextInput = styled.TextInput`
  width: 95%;
  height: 50px;
  border-bottom-color: ${gray};
  border-bottom-width: 2px;
  font-size: 16px;
  margin-bottom: 12px;
  padding-left: 2px;
  padding-bottom: 1px;
`;
