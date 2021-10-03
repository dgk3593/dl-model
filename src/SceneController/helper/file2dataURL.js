/**
 * turn a user selected file to data URL
 * @param {File} file
 * @return {Promise<string>}
 */
export const file2DataURL = async file =>
    new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
    });
