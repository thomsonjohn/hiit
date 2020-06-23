import React, { useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import { sort } from '../../utils/sortGroupList'
import { Theme } from '../../Theme'

import makeStyles from './List.styles'

const List = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  const { moves } = useContext(GlobalContext)
  const groups: { string: [] } = sort(moves)

  return (
    <div className={css(styles.list)}>
      {Object.entries(groups).map(([key, value], index) => {
        return (
          <div key={index} className={css(styles.group)}>
            <div className={css(styles.label)}>
              <span>{key}</span>
              <div className={css(styles.line)} />
            </div>
            <div className={css(styles.groupItems)}>
              {value.map((item: { name: string }, index: number) => (
                <div key={index} className={css(styles.item)}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
