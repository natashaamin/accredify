import { format } from 'date-fns';

export const formattedDate = (date: any) => {
    if (!date) return '-';
    const dateObj = new Date(date);
    return !isNaN(dateObj.getTime()) ? format(dateObj, 'dd MMM yyyy') : '-';  
}