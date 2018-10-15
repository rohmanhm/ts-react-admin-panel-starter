import styled, { css } from 'react-emotion'

const borderCollapsed = css`
  border-collapse: collapse;
`

const TableDetail = styled('table')`
  ${borderCollapsed} width: 100%;
  font-size: 16px;

  tr,
  th,
  td {
    ${borderCollapsed} vertical-align: top;
  }

  tr {
    border-bottom: 1px solid #eee;
  }

  td {
    padding: 15px 0;
    &:first-child {
      font-weight: bold;
      width: 100px;
    }
  }

  &.border {
    tr,
    td {
      border: 1px solid #eee;
    }

    td {
      padding: 0 20px;
    }
  }
`

export default TableDetail
