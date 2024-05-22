import { format } from 'date-fns';


export function bareFormatDate(date: string | Date) {
    const dt = new Date(date);
    return format(dt, 'MMMM dd, yyyy')
}
