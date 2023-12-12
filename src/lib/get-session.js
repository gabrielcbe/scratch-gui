const getSession = () => {
    if (typeof window !== "undefined") {
        const persistedSession = localStorage.getItem("persist:session");

        try{
            if (persistedSession) {
                const session = JSON.parse(persistedSession);
                const newParse = JSON.parse(session.session);

                return {session: newParse, permissions: newParse?.permissions};
            }
        }catch(e){
            console.log('getSession error', { e });
        }

    }
    return null;
};

export { getSession as default };
