import { Table } from "antd";
import * as React from "react";
import "./Table.less";

type TableProps = {
  showLoader: any;
  data: Array<any>;
  columns: Array<any>;
  tableClass: string;
  onRowClick: Function;
};

const CTable: React.FC<TableProps> = (props: TableProps) => {
  const { showLoader, data, columns, tableClass, onRowClick } = props;

  return (
    <Table
      loading={showLoader}
      onRow={(record) => {
        return {
          onClick: () => {
            onRowClick(record);
          },
        };
      }}
      bordered={false}
      pagination={false}
      dataSource={data}
      columns={columns}
      className={tableClass}
    />
  );
};

export default CTable;
