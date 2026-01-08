import React from 'react'
import { discounts } from '../data/discounts'

export default function Discount() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    let element = <></>;

    console.log(year, month, date);

    if (month === 3 && date === 8) {
        element = discounts.filter(e => e.year === year && e.month === 'nonap')[0].element;
    } if (month === 12 && date === 6) {
        element = discounts.filter(e => e.year === year && e.month === 'mikulas')[0].element;
    } else {
        element = discounts.filter(e => e.year === year && e.month === month)[0].element;
    }

    return (
        <>{element}</>
    )
}
