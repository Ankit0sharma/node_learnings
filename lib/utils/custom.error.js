module.exports.ErrorHandler = (error) => {
    let errRes = error;
    if (error) {
        if (error.isJoi) {
            errRes = error.details
                .map(d => d.message)
                .join(', ')
                .replace(/"/g, '');
        } else if (error instanceof Error && typeof error === 'object') {
            try {
                errRes = error.message;
            } catch (e) {
                errRes = undefined;
            }
        } else if (typeof error === 'string' || error instanceof String) {
            errRes = error;
        }
    }
    return errRes;
};