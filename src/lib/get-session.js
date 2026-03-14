const getSession = () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const persistedSession = localStorage.getItem('persist:session');

        try {
            if (persistedSession) {
                const session = JSON.parse(persistedSession);
                const newParse = JSON.parse(session.session);

                return {session: newParse, permissions: newParse?.permissions};
            }
        } catch (e) {
            console.log('getSession error', {e}); // eslint-disable-line no-console
        }

    }
    return null;
};

export {getSession as default};
