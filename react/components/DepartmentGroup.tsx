import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  console.log("mi grupo de departamento es:", departments)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  };

  const CSS_HANDLES = [
    "departmentGroup__item",
    "departmentGroup__text"
  ]
  const handles = useCssHandles(CSS_HANDLES)


  const departmentOptions: any = departments.map((department: Category) => {

    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>

    )
  })
  return (
    <select className={handles["departmentGroup__item"]} onChange={onHandleSetSlug} defaultValue="value0">
      <option className={handles["departmentGroup__text"]} disabled value="value0">
        Seleccione una opción
      </option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
