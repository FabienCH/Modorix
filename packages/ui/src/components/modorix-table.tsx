import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

interface ModorixTableProps {
  columns: string[];
  data: (JSX.Element | string)[][];
  emptyDataMessage: string;
  className?: string;
}

export const ModorixTable = ({ columns, data, emptyDataMessage, className }: ModorixTableProps) => {
  return (
    <div className={`${className} rounded-md border`}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead key={`col-${idx}`} className="bg-modorix-50 filter brightness-102 first:rounded-tl-md last:rounded-tr-md">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length ? (
            data.map((row, idx) => (
              <TableRow key={`row-${idx}`}>
                {row.map((cell, idx) => (
                  <TableCell className={typeof cell === 'string' ? 'table-cell' : 'flex'} key={`cell-${idx}`}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="text-center" colSpan={columns.length}>
                {emptyDataMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
