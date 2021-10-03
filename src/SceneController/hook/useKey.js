import { useState } from "react";

/**
 * @return {[key: number, update: () => void]}
 */
export function useKey() {
    const [key, setKey] = useState(0);
    const update = () => setKey(current => current + 1);

    return [key, update];
}
