import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Space}</th>
            <th>{individualExcelData.Vacancy}</th>
            <th>{individualExcelData.Plate}</th>
            <th>{individualExcelData.InteranceTime}</th>
            
        </>
    )
}