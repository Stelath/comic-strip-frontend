export const sendPrompt = async (prompt) => {
    try {
        const response = await fetch("/api/prompt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
}

export const getJob = async (jobID) => {
    try {
        const response = await fetch(`/api/jobs/${jobID}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
}
