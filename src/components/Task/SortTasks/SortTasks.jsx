import { Select } from 'antd';
import clases from './SortTasks.module.css';

const { Option } = Select;

export default function SortTasks({defaultValue, options, value, onChange}){
  return(
    <Select value={value} className={clases.list} defaultValue={defaultValue}
      onChange={(e)=>onChange(e.target.value)} style={{ width: 200 }}>
      <Option disabled value=" ">{defaultValue}</Option>
      {options.map((el)=>{
        return <Option value={el.value} key={el.value}>{el.name}</Option>
      })}
  </Select>
  )
}