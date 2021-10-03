import * as list from "./dataList";
import { fetchDataList } from "./fetchDataList";

/**
 * @param {'model' | 'animation' | 'others' | 'all'} group - data group to fetch
 */
export const fetchDataGroup = group => fetchDataList(list[group] ?? []);
