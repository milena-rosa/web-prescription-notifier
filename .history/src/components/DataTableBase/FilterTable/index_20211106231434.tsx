import React, { ChangeEvent, ReactElement, useState } from 'react'
import { Popover } from 'react-tiny-popover'

import { Input } from '../../Input'

import { Container, MoreFiltersButton, ResetButton } from './styles'

interface FilterTableProps {
  filterText: string
  onFilter: (event: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  placeholder?: string
  hasMoreFilters?: boolean
  numberOfSelectedFilters?: number
  MoreFiltersComponent?: ReactElement
}

export const FilterTable = ({
  filterText,
  onFilter,
  onClear,
  placeholder,
  hasMoreFilters = false,
  numberOfSelectedFilters = 0,
  MoreFiltersComponent = <div>teste</div>
}: FilterTableProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Container>
      <Input name="search" placeholder={placeholder} value={filterText} onChange={onFilter} />
      {hasMoreFilters && (
        <Popover
          isOpen={isPopoverOpen}
          positions={['bottom', 'right']}
          onClickOutside={() => setIsPopoverOpen(false)}
          reposition={false}
          padding={4}
          content={MoreFiltersComponent}
          align="start"
        >
          <MoreFiltersButton
            hasSelectedFilter={numberOfSelectedFilters > 0}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            {numberOfSelectedFilters === 0 ? (
              <p>filter icon</p>
            ) : (
              // <Filter color="var(--white)" size={20} />
              <div>{numberOfSelectedFilters}</div>
            )}
            Filtros
          </MoreFiltersButton>
        </Popover>
      )}
      <ResetButton onClick={onClear}>Limpar filtros</ResetButton>
    </Container>
  )
}
