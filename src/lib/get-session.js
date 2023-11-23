const getSession = () => {
    if (typeof window !== "undefined") {
        let session = localStorage.getItem("scratchSession");

        if (session) {
            session = JSON.parse(session);
        }

        return session;
    }
    return null;
};

export { getSession as default };
