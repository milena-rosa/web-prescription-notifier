import React from 'react'
import DataTable, { TableProps, TableStyles } from 'react-data-table-component'

import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeftReward, ChevronsRightForward } from '../Icon'

import { Checkbox } from '../Checkbox'

import { Container } from './styles'

const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate }

export function DataTableBase<T>(props: TableProps<T>) {
  const customStyles: TableStyles = {
    headRow: {
      style: {
        background: 'var(--gray-10)',
        color: 'var(--gray-80)',
        fontSize: '0.875rem',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    },

    rows: {
      style: {
        fontSize: '0.875rem',
        color: 'var(--gray-80)',
        minHeight: '3.5rem'
      },
      selectedHighlightStyle: {
        // use nth-of-type(n) to override other nth selectors
        '&:nth-of-type(n)': {
          backgroundColor: 'var(--gray-40)'
        }
      },
      highlightOnHoverStyle: {
        backgroundColor: 'var(--gray-10)',
        borderBottomColor: 'var(--gray-20)',
        borderTopColor: 'var(--gray-20)',
        transitionDuration: '0.15s',
        transitionProperty: 'background-color'
      }
    },
    subHeader: {
      style: {
        padding: 0
      }
    },
    pagination: {
      style: {
        borderTopColor: 'var(--gray-20)',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        color: 'var(--gray-80)',
        fontSize: '1rem',
        minHeight: '4.5rem'
      },
      pageButtonsStyle: {
        backgroundColor: 'transparent',
        borderRadius: '50%',
        cursor: 'pointer',
        height: '2.5rem',
        padding: '0.5rem',
        transition: '0.4s',
        width: '2.5rem',

        '&:disabled': {
          cursor: 'unset'
        },
        '&:hover:not(:disabled)': {
          backgroundColor: 'var(--gray-10)'
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: 'var(--gray-20)'
        }
      }
    }
  }
  return (
    <Container>
      <DataTable
        pagination
        paginationIconFirstPage={<ChevronsLeftReward />}
        paginationIconPrevious={<ChevronLeft />}
        paginationIconNext={<ChevronRight />}
        paginationIconLastPage={<ChevronsRightForward />}
        paginationComponentOptions={{
          rangeSeparatorText: 'de',
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Todas',
          rowsPerPageText: 'Linhas por página:'
        }}
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={selectProps}
        sortIcon={<ChevronDown size={16} />}
        customStyles={customStyles}
        highlightOnHover={true}
        pointerOnHover={true}
        {...props}
      />
    </Container>
  )
}
