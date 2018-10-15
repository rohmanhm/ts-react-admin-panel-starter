import styled from 'react-emotion'
import { Icon } from 'antd'

export const LogoWrapper = styled('div')`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* Ant design logo example */
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;

  .logo-image {
    height: 30px;
  }

  .logo-text {
    font-size: 1.5em;
    font-weight: bold;
    color: #3384c4;
    margin-left: 15px;
  }
`

export const TriggerIcon = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
`
