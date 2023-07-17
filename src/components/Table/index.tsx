import style from './Table.module.css'

interface TableProps {
    cols: any[];
    data: any[]
}

const Table = ({ cols, data }: TableProps) => {
    console.log(cols);
    
    return (
        <table className={style.tablee}>
            <thead className='border border-1'>
                <tr>
                    
                    {cols.map((col) => (
                        <th key={col.columnIndex}>{col.tilte}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row: any) => (
          <tr key={row.id}>
            {cols.map((col: any) => (
              <td key={col.columnIndex}>{row[col.columnIndex]}</td>
            ))}
          </tr>
        ))}
                
                 
                
            </tbody>
        </table>
    )
}

export default Table
