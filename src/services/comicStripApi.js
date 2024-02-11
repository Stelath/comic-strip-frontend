export const sendPrompt = async (prompt, numImages) => {
    console.log("Sending Prompt...");
    try {
        const response = await fetch("/api/prompt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt, numImages }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
}

export const checkJobStatus = async (jobID) => {
    try {
        const response = await fetch(`/api/jobs/${jobID}`, {
            method: "GET",
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
}

export const pollJobStatus = async (jobID, loadingCallback, completedCallback, failedCallback) => {
    const interval = setInterval(async () => {
        var data = null;
        try {
            data = await checkJobStatus(jobID);
        } catch (error) {
            console.error("An error occurred while checking job status:", error);
        }
        if (data === null) {
            clearInterval(interval);
            failedCallback();
            return;
        }

        if (data.currentState.toLowerCase() !== "completed") {
            loadingCallback(data);
        } else {
            clearInterval(interval);
            completedCallback(data);
        }
    }, 5000);
}
