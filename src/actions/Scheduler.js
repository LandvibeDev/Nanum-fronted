/**
 * Created by jgb on 2016-08-27.
 */

export const CAL_CLICKED = "CAL_CLICKED";
import axios from 'axios';

export function calendar_click(start,end,title="") {
    return {
        type:CAL_CLICKED,
        start:start,
        end:end,
        title:title
    }
}