import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useState, Fragment } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart({ allProps, removeProduct }) {
    const [pageSize, setPageSize] = useState(5);

    const rows = allProps[1];
    // [{ id: 1, color: 'black', name: 'Jon', price: 35 },]

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 120,
        },
        { field: 'name', headerName: 'Model name', width: 250 },
        { field: 'color', headerName: 'Color', width: 250 },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 250,
        },
        {
            field: 'address',
            headerName: 'Address',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) => `${params.row.name || ''} ${params.row.color || ''}`,
        },
        {
            field: 'time',
            headerName: 'Time',
            type: 'string',
            width: 300,
            valueGetter: () => `${Date().toLocaleString()}`,
        },
        {
            field: 'edit',
            type: 'actions',
            getActions: (params) => [<GridActionsCellItem icon={<EditIcon />} label="Edit" />],
        },
        {
            field: 'delete',
            type: 'actions',
            getActions: (params) => [
                <GridActionsCellItem
                    onClick={() => removeProduct(params.row.id)}
                    icon={<DeleteIcon />}
                    label="Delete"
                />,
            ],
        },
    ];

    // const deleteUser = useCallback(
    //     (id) => () => {
    //         alert(id);
    //         // setTimeout(() => {
    //         //     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    //         // });
    //     },
    //     [],
    // );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <div>
                    <label>Search by name</label>
                    <input className={cx('filter-input')} type={'text'} />
                </div>
                <div className={cx('btn-cart')}>
                    <button className={cx('btn')}>Pay</button>
                    <button className={cx('btn')} onClick={() => removeProduct(1)}>
                        Delete
                    </button>
                </div>
            </div>
            <div className={cx('table')}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    checkboxSelection
                    pagination
                    pageSize={pageSize}
                    rowsPerPageOptions={[2, 3, 5, 10]}
                    sx={{
                        '&  .MuiDataGrid-main': {
                            fontSize: '14px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                        '&  .MuiTablePagination-selectLabel': {
                            fontSize: '13px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                        '& .MuiSelect-select': {
                            paddingTop: '13px',
                            fontSize: '13px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                        '&  .MuiTablePagination-displayedRows': {
                            fontSize: '13px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Cart;
