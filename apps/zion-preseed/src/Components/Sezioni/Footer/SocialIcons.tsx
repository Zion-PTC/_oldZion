import styled from 'styled-components';
import { FontAwesomeIcon } from '@zionrepack/fortawesome-react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { DARK } from '../../../js/colori';

const Icons = styled.div`
  display: flex;
  margin: 0px;
  margin-left: 35px;
  padding: 0px;
  color: ${DARK};
`;

export default function SocialIcons() {
  return (
    <Icons>
      <FontAwesomeIcon
        icon={faTwitter}
        style={{
          height: '15px',
          width: '15px',
          marginRight: '10px',
        }}
      />
      <FontAwesomeIcon
        icon={faFacebookF}
        style={{
          height: '15px',
          width: '15px',
          marginRight: '10px',
        }}
      />
      <FontAwesomeIcon
        icon={faMediumM}
        style={{
          height: '15px',
          width: '15px',
          marginRight: '10px',
        }}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        style={{
          height: '15px',
          width: '15px',
          marginRight: '10px',
        }}
      />
    </Icons>
  );
}
