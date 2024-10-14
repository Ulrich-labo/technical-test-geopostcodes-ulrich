import React from "react";


/**
 * Component that displays a summary table of the dataset content.
 * I don't display a dynamic table here because I don't have in the dataset
 * Json the needed value to do so.
 * but I can add it if needed.
 *
 * @returns {React.ReactElement} The component
 */
function SummaryTable() {
    return (
        <>
            <div className="col-md-4">
                <div className="data-table">
                    <h3 className="table-title">Dataset Content</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Countries</td>
                                <td>193</td>
                            </tr>
                            <tr>
                                <td>Administrative Regions</td>
                                <td>284,626</td>
                            </tr>
                            <tr>
                                <td>Streets</td>
                                <td>34,404,491</td>
                            </tr>
                            <tr>
                                <td>Businesses & admin.</td>
                                <td>1,721,216</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


export default SummaryTable;