document.addEventListener("DOMContentLoaded", () => {
    const tenantForm = document.getElementById("tenantForm") as HTMLFormElement;

    tenantForm.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Retrieve field values from the form
        const tenantId = (document.getElementById("tenantId") as HTMLInputElement).value;
        const tenantName = (document.getElementById("tenantName") as HTMLInputElement).value;
        const adminEmail = (document.getElementById("adminEmail") as HTMLInputElement).value;
        const field4 = (document.getElementById("field4") as HTMLInputElement).value;
        const field5 = (document.getElementById("field5") as HTMLInputElement).value;
        const field6 = (document.getElementById("field6") as HTMLInputElement).value;
        const field7 = (document.getElementById("field7") as HTMLInputElement).value;

        // Build an object to represent the form data
        const tenantData = {
            tenantId,
            tenantName,
            adminEmail,
            field4,
            field5,
            field6,
            field7,
        };

        console.log("Submitting form data:", tenantData);

        // Send a POST request to the backend API endpoint for onboarding
        fetch('http://localhost:8080/tenants/onboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include X-Tenant-ID header if required by your backend interceptor
                'X-Tenant-ID': tenantId
            },
            body: JSON.stringify(tenantData)
        })
            .then(response => response.text())
            .then(result => console.log("Server response:", result))
            .catch(error => console.error("Error submitting form:", error));
    });
});
