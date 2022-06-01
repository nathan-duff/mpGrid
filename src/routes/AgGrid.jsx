import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef } from "react";
import "../AgGrid.css";

export default function AgGrid(data) {
    const gridRef = useRef();

    const rowData = [];
    for (let i = 0; i < data.data.objects.length; i++) {
        rowData.push({name: data.data.objects[i].name, province: data.data.objects[i].current_riding.province,  riding: data.data.objects[i].current_riding.name.en, party: data.data.objects[i].current_party.short_name.en})
    }
    const columnDefs = [
        { field: 'name', minWidth: 175},
        { field: 'province', minWidth: 75},
        { field: 'riding', minWidth: 300},
        { field: 'party', flex: 1, minWidth: 125}
    ];

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
    }), [])
    const gridOptions = {
        rowData: rowData,
        columnDefs: columnDefs,
        animateRows: true,
    }


    const onGridSizeChanged = useCallback(e => {
        gridRef.current.api.sizeColumnsToFit();
    })
    
    const onFirstDataRendered = useCallback(e => {
        gridOptions.columnApi.applyColumnState({
            state: [{ colId: 'name', sort: 'asc' }],
            defaultState: { sort: null },
        });
    })

    return (
        <div className="ag-theme-alpine-dark" style={{ height: "90vh", width: "100%", margin: 0}}>
            <AgGridReact
                onGridSizeChanged={onGridSizeChanged}
                onFirstDataRendered={onFirstDataRendered}
                ref={gridRef}
                gridOptions={gridOptions}
                defaultColDef={defaultColDef}
            />
        </div>
    );
}